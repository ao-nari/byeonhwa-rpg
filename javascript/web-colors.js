$(function(){$(function(){
 
    if ($("#text_editor_textarea").length != 0) { 
      $.sceditor.command.get('color')._menu  = function (editor, caller, callback) {
        var mColorBasic = [], 
          html = $('<div />');
          
 // liste des couleurs
        
        mColorBasic["Bom"] = "#BC6A8C";
        mColorBasic["Yeoreum"] = "#66A465";
        mColorBasic["Gaeul"] = "#D36E43";
        mColorBasic["Gyeoul"] = "#539D9F";
        mColorBasic["Munoehan"] = "#706BD0";
        mColorBasic["Akma"] = "#B84654";
  
        mColorBasic["Bom clair"] = "#c987a3";
        mColorBasic["Yeoreum clair"] = "#84b683";
        mColorBasic["Gaeul clair"] = "#db8b68";
        mColorBasic["Gyeoul clair"] = "#75b0b2";
        mColorBasic["Munoehan clair"] = "#8c88d9";
        mColorBasic["Akma clair"] = "#c66a76";
  
        mColorBasic["Bom foncé"] = "#965470";
        mColorBasic["Yeoreum foncé"] = "#518350";
        mColorBasic["Gaeul foncé"] = "#a85835";
        mColorBasic["Gyeoul foncé"] = "#427d7f";
        mColorBasic["Munoehan foncé"] = "#5955a6";
        mColorBasic["Akma foncé"] = "#933843";
        
 // fin de la liste des couleurs
        
        for(key in mColorBasic) html.append('<div class="color-option" title="' + key + '"><span color="' + mColorBasic[key] + '" style="background-color: ' + mColorBasic[key] + ' !important;"></span></div>');
        
        html.find('span').click(function(e) {
          callback($(this).attr('color'));
          editor.closeDropDown(true);
          e.preventDefault();
        });
        
        editor.createDropDown(caller, "color-picker", html);
      }    
    }
 })});