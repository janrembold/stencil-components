import { p as promiseResolve, b as bootstrapLazy } from './index-92baae72.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["demo-container_4",[[1,"demo-container"],[1,"demo-headline",{"headline":[1]}],[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}],[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]]], options);
});
