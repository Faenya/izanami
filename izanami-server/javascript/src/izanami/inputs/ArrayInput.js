import React, { Component } from "react";
import Select from "react-select";
import { customStyles } from "../../styles/reactSelect";

export class ArrayInput extends Component {
  state = {
    loading: false,
    values: []
  };

  componentDidMount() {
    if (this.props.valuesFrom) {
      this.setState({ loading: true });
      fetch(this.props.valuesFrom, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json"
        }
      })
        .then(r => r.json())
        .then(values => values.map(this.props.transformer || (a => a)))
        .then(values => this.setState({ values, loading: false }));
    }
  }

  changeValue = (e, idx) => {
    if (e && e.preventDefault) e.preventDefault();
    const newValues = [...this.props.value];
    newValues[idx] = e.target.value;
    this.props.onChange(newValues);
  };

  addFirst = e => {
    if (e && e.preventDefault) e.preventDefault();
    if (!this.props.value || this.props.value.length === 0) {
      this.props.onChange([this.props.defaultValue || ""]);
    }
  };

  addNext = e => {
    if (e && e.preventDefault) e.preventDefault();
    const newValues = [...this.props.value, this.props.defaultValue || ""];
    this.props.onChange(newValues);
  };

  remove = (e, idx) => {
    if (e && e.preventDefault) e.preventDefault();
    const newValues = [...this.props.value];
    newValues.splice(idx, 1);
    this.props.onChange(newValues);
  };

  render() {
    const values = this.props.value || [];
    return (
      <div>
        {values.length === 0 && (
          <div className="mb-3 row">
            <label
              htmlFor={`input-${this.props.label}`}
              className="col-sm-2 col-form-label"
            >
              {this.props.label}
            </label>
            <div className="col-sm-10 d-flex align-items-center">
              <button
                disabled={this.props.disabled}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.addFirst}
              >
                    <i className="fas fa-plus-circle" />{" "}
              </button>
            </div>
          </div>
        )}
        {values.map((value, idx) => (
          <div className="row mb-3" key={idx}>
            {idx === 0 && (
              <label className="col-sm-2 col-form-label">
                {this.props.label}
              </label>
            )}
            {idx > 0 && (
              <label className="col-sm-2 col-form-label">&nbsp;</label>
            )}
            <div className="col-sm-10">
              <div className="input-group">
                {!this.props.valuesFrom && (
                  <input
                    disabled={this.props.disabled}
                    type="text"
                    className="form-control"
                    id={`input-${this.props.label}`}
                    placeholder={this.props.placeholder}
                    value={value}
                    onChange={e => this.changeValue(e, idx)}
                  />
                )}
                {this.props.valuesFrom && (
                  <Select
                    styles={customStyles}
                    name={`selector-${idx}`}
                    isLoading={this.state.loading}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    options={this.state.values}
                    value={this.state.values.filter(v => v.value === value)}
                    onChange={e =>
                      this.changeValue({ target: { value: e.value } }, idx)
                    }
                  />
                )}
                <span className="ms-1 d-flex input-group-prepend align-items-center">
                  <div>
                    <button
                      disabled={this.props.disabled}
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={e => this.remove(e, idx)}
                    >
                      <i className="fas fa-trash-alt" />
                    </button>
                    {idx === values.length - 1 && (
                      <button
                        disabled={this.props.disabled}
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={this.addNext}
                      >
                            <i className="fas fa-plus-circle" />{" "}
                      </button>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
