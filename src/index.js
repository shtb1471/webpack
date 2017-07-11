/**
 * Created by lenovo on 2017/7/11.
 */
import _ from 'lodash'
import 'bootstrap'
import './style.css'

function component() {
    var elment=document.createElement('div');
    elment.innerHTML=_.join(['Hello','webpack'],'');
    elment.classList.add('Hello');
    return elment;
}
document.body.appendChild(component());