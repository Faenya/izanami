#!/usr/bin/env bash


if [ -z "$TRAVIS_TAG" ];
then
    echo 'Not a tag nothing to publish to npm registry'
else
    echo "Publishing npm packages for tag ${TRAVIS_TAG}"
    yarn config set version-git-tag false
    LOCATION=`pwd`

    echo "//registry.npmjs.org/:_password=${NPM_PASSWORD}" > ~/.npmrc
    echo "//registry.npmjs.org/:_authToken=${NPM_AUTH}" >> ~/.npmrc
    echo "//registry.npmjs.org/:username=adelegue" >> ~/.npmrc
    echo "//registry.npmjs.org/:email=aadelegue@gmail.com" >> ~/.npmrc

    cd ${LOCATION}/izanami-clients/react
    echo "${TRAVIS_TAG}" | cut -d "v" -f 2 | yarn version
    npm publish

    cd ${LOCATION}/izanami-clients/node
    echo "${TRAVIS_TAG}" | cut -d "v" -f 2 | yarn version
    npm publish

    cd ${LOCATION}
fi