
function begin() {

    var __lis = [{ "offset": 1198, "text": "We don't talk anymore " },
                { "offset": 4100, "text": "We don't talk anymore " },
                { "offset": 6350, "text": "We don't talk anymore Like we used to do" },
                { "offset": 11100, "text": "We don't laugh anymore" },
                { "offset": 13600, "text": "What was all of it for ? " },
                { "offset": 16100, "text": "We don't talk anymore " },
                { "offset": 18100, "text": "Like we used to do" },
                { "offset": 21100, "text": "I just heard you found the one you'vebeen looking" },
                { "offset": 24100, "text": "You been looking for" },
                { "offset": 27100, "text": "I wish i would've konwn that wasn't me " },
                { "offset": 31000, "text": "Cause even after all this time i still wonder" },
                { "offset": 35000, "text": "Why i can't move on ?" },
                { "offset": 37000, "text": "Just the way you dance so easliy " },
                { "offset": 42000, "text": "Don't wanna know " },
                { "offset": 43200, "text": "The kinda dress you're wearin' tonight " },
                { "offset": 45300, "text": "If he's holdin' onto you so tight " },
                { "offset": 48000, "text": "The way i did before" },
                { "offset": 51000, "text": "I overdosed" },
                { "offset": 52000, "text": "Should've known your love was game " },
                { "offset": 55000, "text": "Now I can't get'cha outof my brain" },
                { "offset": 58000, "text": "Ooh it's such a shame " },
                { "offset": 61000, "text": "We don't talk anymore" },
                { "offset": 63000, "text": "We don't talk anymore" },
                { "offset": 66000, "text": "We don't talk anymore" },
                { "offset": 67500, "text": "Like we used to do" },
                { "offset": 71000, "text": "We don't laugh anymore" },
                { "offset": 74000, "text": "What was all of it for ? " },
                { "offset": 76000, "text": "We don't talk anymore " },
                { "offset": 78000, "text": "Like we used to do" },
                { "offset": 81000, "text": "Selena : I just hope you'r lyin' next to somebody " },
                { "offset": 84000, "text": "Know it's hard to love yalike me" },
                { "offset": 87000, "text": "Must be a good reason that you're gone " },
                { "offset": 92000, "text": "Every now and then I think you might want me to come show up your door" },
                { "offset": 98000, "text": "But I'm just too afraidthat i'll be worng " },
                { "offset": 103000, "text": "Don't wanna know " },
                { "offset": 102500, "text": "If you'ra lookin' intoher eyes" },
                { "offset": 104000, "text": "If she'sholdin' onto you so tight  " },
                { "offset": 108000, "text": "The way i did before  " },
                { "offset": 109000, "text": "I overdosed " },
  { "offset": 111000, "text": "Should I know your lovewas a game" },
   { "offset": 113000, "text": "Now I can't get'cha outof my brain " },
   { "offset": 115000, "text": "Ooh it's such a shame" },
    { "offset": 118000, "text": "We don't talk anymore" },
     { "offset": 121000, "text": "We don't talk anymore" },
      { "offset": 124000, "text": "We don't talk anymore" },
       { "offset": 126000, "text": "Like we used to do" },
        { "offset": 128000, "text": "We don't talk anymore" },
    { "offset": 130000, "text": "We don't laugh anymore " },
{ "offset": 131000, "text": "What was all of it for ?" },
{ "offset": 133000, "text": "We don't talk anymore" },
{ "offset": 135000, "text": "Like we used to do" },
{ "offset": 146000, "text": "Charlie: Like we used to do" },
{ "offset": 157000, "text": "Don't wanna know The kinda dress you're wearin' tonight " },
{ "offset": 161000, "text": "If he's givin' it to you just right " },
{ "offset": 165000, "text": "The way i did before  " },
{ "offset": 1665000, "text": "I overdosed " },
{ "offset": 168000, "text": "Should I know your lovewas a game" },
{ "offset": 171000, "text": "Now I can't get'cha outof my brain " },
{ "offset": 173500, "text": "Ooh it's such a shame" },
{ "offset": 180000, "text": "We don't talk anymore" },
{ "offset": 182000, "text": "We don't talk anymore Like we used to do " },
{ "offset": 186000, "text": "We don't talk anymore" },
{ "offset": 188500, "text": "What was all of it for ?" },
{ "offset": 190000, "text": "We don't talk anymore Like we used to do " },
{ "offset": 195000, "text": "We don't talk anymore" },
{ "offset": 202000, "text": "The way i did before " },
{ "offset": 208000, "text": "We don't talk anymore" },
{ "offset": 210000, "text": "Ooh Woo " },
{ "offset": 214000, "text": "S: Ooh it's such a shame " },
{ "offset": 216000, "text": "We don't talk anymore" }];
var __eul = document.getElementById("lrc");
(function () {
    for (var i = 0; i < __lis.length; i++) {
        var eli = document.createElement("li");
        eli.innerText = __lis[i].text;
        __eul.appendChild(eli);
    }
})();

var __freq = 20;
var __fraction = 2 / 5;

var __go = function (_lineno) {
    var _time;
    if (_lineno === 0) {
        _time = __lis[_lineno].offset;
    } else {
        _time = __lis[_lineno].offset - __lis[_lineno - 1].offset;
    }
    var _timer = setTimeout(__go.bind(this, _lineno + 1), _time);

    // 高亮下一行歌词
    if (_lineno > 0) {
        __eul.children[_lineno - 1].setAttribute("class", "");
    }
    var _ep = __eul.children[_lineno];
    _ep.setAttribute("class", "z-crt");

    // 满足需求5，6
    var _scrollTop;
    if (_ep.offsetTop < __eul.clientHeight * __fraction) {
        _scrollTop = 0;
    } else if (_ep.offsetTop > (__eul.scrollHeight - __eul.clientHeight * (1 - __fraction))) {
        _scrollTop = __eul.scrollHeight - __eul.clientHeight;
    } else {
        _scrollTop = _ep.offsetTop - __eul.clientHeight * __fraction;
    }

    // 如用户拖动滚动条导致当前显示行超出显示区域范围，下一行直接定位到当前显示行
  
        __eul.scrollTop = _scrollTop;

};
/**
 * 歌词单行滚动实现
 */
__scroll = function (_crt, _dst, _step) {
    if (Math.abs(_crt - _dst) < _step) {
        return;
    }
    if (_crt < _dst) {
        __eul.scrollTop += _step;
        _crt += _step;
    } else {
        __eul.scrollTop -= _step;
        _crt -= _step;
    }
    setTimeout(__scroll.bind(this, _crt, _dst, _step), __freq);
};



__go(0)




}
