function i(e,r){return Object.entries(r).reduce((n,[t,c])=>n.replace(new RegExp(`\\{${t}\\}`,"g"),String(c)),e||"")}export{i as f};
