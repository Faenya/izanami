# The UI

You can access to the features clicking "features" on the left menu. 

<img src="../img/features/full.png" width="100%" />

You can then 

* Search using a pattern on feature key 
* add a feature 
* update a feature 
* delete a feature

If you're admin, you can also
 
* Download features 
* Upload features 

## Browse features 

You have the choice between two mode : 
 * Flat mode: features are displayed in a table 
 * Tree mode: features are displayed as tree like a folder 

You can switch the mode using the first button on the left. 

### Flat mode 

<img src="../img/features/full.png" width="100%" />

### Tree mode

<img src="../img/features/tree_view.png" width="100%" />

On the tree mode, an action menu appear with the mouse is over the name of a feature. With the action menu you can 
 
* add a node
* edit a node
* lock / unlock a node
* copy a node
* switch to the flat for a feature 

#### Copy nodes 

You can copy a group of features to a destination selecting the parent node. 

<img src="../img/features/copy_features.png" width="100%" />

You can choose to enable or disable the copied feature by default. 

## Edit a feature  

When you create a feature, you have to select a strategy. You can choose between NO_STRATEGY, RELEASE_DATE, DATE_RANGE, PERCENTAGE, SCRIPT or GLOBAL_SCRIPT

### NO_STRATEGY 

this is the simpler one, the feature can be active or inactive

<img src="../img/features/no_strategy.png" width="100%" />
  
### RELEASE_DATE 

this kind of strategy allow you to enable a feature on a date value in addition to the active boolean.  

<img src="../img/features/release_date.png" width="100%" />

### DATE_RANGE 

this kind of strategy allow you to enable a feature on a range of dates in addition to the active boolean.  

<img src="../img/features/date_range.png" width="100%" />
  
### HOUR_RANGE 

this kind of strategy allow you to enable a feature on a range of hour for a day in addition to the active boolean.  

<img src="../img/features/hour_range.png" width="100%" />

### PERCENTAGE

this kind of strategy allow you to enable a feature for a percentage of clients. In this strategy, the client need to send a context with an `id` field in order to calculate if the feature is enabled or not. 

<img src="../img/features/percentage.png" width="100%" />

### SCRIPT 

this kind of strategy allow you to enable a feature using a script execution. On json context should be posted to evaluate if the feature is active or not. 

In this example, the feature is active if the user send in the context is `ragnar.lodbrock@gmail.com` : 

<img src="../img/features/script.png" width="100%" />

You can find more details about script @ref[on this page](./index.md#script).

### GLOBAL SCRIPT 

Global script strategy is the same as script except that the script are shared between features. 


## Evaluate a feature 

You can evaluate if a feature is active or with the explorer screen. 

<img src="../img/features/explorer.png" width="80%" />

In this example, we have specified a pattern `*:script` to filter the feature. 

We have also specified a context to test the feature. The tested feature is a feature with a "script" strategy so we want to be sure that the script is correct.   


## Download and Upload

If you're admin you have the right to download or upload. 

<img src="../img/download-upload.png" width="50%" />
