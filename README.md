# Description
GSCC PoC Portal with these modules:
- GSBI
- GSPL

# Add Modules soft links from src/app
```bash
ln -s ../../../gscc-poc-cp-gsbi/src gsbi
ln -s ../../../gscc-poc-cp-gspl/src gspl
```

# Lazy load soft links modules from app-routing.module.ts
```javascript
...
  { path: 'gsbi', loadChildren: () => import('./gsbi/gsbi.module').then(m => m.GsbiModule) },
  { path: 'gspl', loadChildren: () => import('./gspl/gspl.module').then(m => m.GsplModule) },  
...
```

# Modify build options from angular.json to preserve soft links compilation
```javascript
    "preserveSymlinks": true,
```