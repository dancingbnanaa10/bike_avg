const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const main_C = document.querySelector('#main_Container');
main_C.style.width = viewportWidth*.8 + "px";
main_C.style.height = viewportHeight*.6+"px";
main_C.style.marginLeft = viewportWidth*.1+"px";
main_C.style.marginTop = viewportHeight*.15+"px";
var st_calc = 0;

var input_sel = document.querySelector('.input_trans');
var input_height = input_sel.offsetHeight;
var inputs = document.querySelectorAll(".input_trans");
inputs.forEach(div =>
{
    div.style.fontSize = input_height*.6 + "px";
}
)
function checker(id)
{
    var sel = document.querySelector('#'+id);
    var min,max,val;
    
    min = parseFloat(sel.min);
    max = parseFloat(sel.max);
    val = parseFloat(sel.value);

    if (val >= min && val <= max) {
        return;
    } else {
    if (Math.abs(max - val) < Math.abs(val - min)) {
        sel.value = '';
    } else {
        sel.value = min;
    }
}}
function margin_setter(margin_val, target)
{
    var doc_spacer = document.querySelector(margin_val);
    var input_margin = 0.15 * Math.max(doc_spacer.offsetHeight, doc_spacer.offsetWidth);
    var thin_margins_divs = document.querySelectorAll(target);
    thin_margins_divs.forEach(function(element)
    {
        element.style.marginTop = input_margin + 'px';
        
    })
}
margin_setter('.spacer','#main_Container .st_row .spacer_thin .input_trans');
margin_setter('#main_Container .nd_row .spacer','#main_Container .nd_row .spacer_thin .input_trans');
function getValue(id)
{
    return parseFloat(document.querySelector("#"+id).value)
}
function main_calc(chk)
{
    console.log(chk)
    if (chk === 0) {
        st_calc = 1;
    } else {
        if (st_calc === 0) {
            return; 
        }
       
    }
    var km = getValue('km');
    var meters = getValue('meters');
    var hrs = getValue('hrs');
    var mins = getValue('mins');
    var secs = getValue('secs');
    meters = meters + 1000* km;
    secs = secs + mins*60 + hrs * 3600;
    var speed = meters/secs;
    speed = parseFloat((speed* 3.6).toFixed(2));
    document.querySelector('#result').placeholder = speed + 'km/h';
}