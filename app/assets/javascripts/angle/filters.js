

angle.filter('dasherize', function() {
    return function (str) {
        if(str === undefined) {
          return "";
        } else {
          return str.toLowerCase().replace(new RegExp('[^a-z0-9]+', 'g'), '-')
            .replace(new RegExp('-$|^-', ''), '');
        }
    }
});

// method for formatting widget show url
fogLights.filter('fmtWidgetUrl', function($filter){
    return function (widget) {
      if(widget) {
        var url   = [ "/#/widgets" ];

        url.push($filter('dasherize')(widget.group));
        url.push($filter('dasherize')(widget.name));

        return url.join("/");
      }
    }
})