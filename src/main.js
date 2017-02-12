// 基础滚动
import sliderbasic from './components/slider_basic';
// 不定宽滚动
import slider_variableWidth from './components/slider_variableWidth';
// 无限滚动
import sliderbasicloop from './components/slider_basic_loop';
// 垂直滚动
import slidervertical from './components/slider_vertical';
// 多级滚动
import slidermultipleSlide from './components/slider_multipleSlide';
// 实例vue
new Vue(sliderbasic);
new Vue(slider_variableWidth);
new Vue(sliderbasicloop);
new Vue(slidervertical);
new Vue(slidermultipleSlide);