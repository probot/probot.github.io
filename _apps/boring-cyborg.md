---
title: Boring Cyborg
description: Automatically label PRs based on the path of the file that are modified in the PR
slug: boring-cyborg
screenshots:
- https://github.com/kaxil/boring-cyborg/blob/master/assets/usage-screenshot-1.png
authors: [ "kaxil" ]
repository: kaxil/boring-cyborg
host: https://gentle-mesa-48041.herokuapp.com/
---

## Usage

1. **[Configure the Github App](https://github.com/apps/boring-cyborg)**
2. After installing the Github app, create `.github/boring-cyborg.yml` in the default branch to enable it
3. It will start scanning for pull requests within few minutes.

```yaml
# Enable "labeler" for your PR that would add labels to PRs based on the paths that are modified in the PR. 
labelPRBasedOnFilePath:
  # Add 'label1' to any changes within 'example' folder or any subfolders
  label1:
    - example/**/*
  
  # Add 'label2' to any file changes within 'example2' folder
  label2: 
    - example2/*

  # Complex: Add 'area/core' label to any change within the 'core' package
  area/core:
    - src/core/*
    - src/core/**/*  
    
  # Add 'test' label to any change to *.spec.js files within the source dir
  test:
    - src/**/*.spec.js  
```
