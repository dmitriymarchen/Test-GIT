$(document).ready(function() {
 function setEqualHeight(columns)
 {
 var tallestcolumn = 0;
 columns.each(
 function()
 {
 currentHeight = $(this).height();
 if(currentHeight > tallestcolumn)
 {
 tallestcolumn  = currentHeight;
 }
 }
 );
 columns.height(tallestcolumn);
 }
var w = screen.width;
if(w >= 768){
	setEqualHeight($("div#col_height"));		
}
});
