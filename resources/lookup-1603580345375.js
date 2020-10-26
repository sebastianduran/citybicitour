(function(window, undefined) {
  var dictionary = {
    "7f3a0c7b-27d0-4f4f-91a9-73bd515df4c6": "login",
    "f5a3d0b8-07a4-4e7c-9826-4eaf770b4a5f": "start",
    "2a4f8956-241a-42e9-9395-6f145af0f77e": "bicitour",
    "293bca2a-19c1-4aee-8d09-73259a8a6955": "roles",
    "2a7d3418-b17c-4cf1-8259-d4888ef9bc63": "pagar",
    "a55fa030-c1f4-4d86-833b-f92b54b60820": "route",
    "6f303181-3fd9-4ffd-b504-61dc2ba7eacb": "main",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "splash",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);