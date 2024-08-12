$(function() {
    $(function() {
      var a = $("#text_editor_textarea");
      a.length && ($("a.sceditor-button-source").remove(), !a.sceditor("instance").inSourceMode() && a.sceditor("instance").toggleSourceMode())
    })
  });