$(function () {

  var sidebarHtml = ''
    + '<div class="side-container">'
    + '<center>'
    + '<div class="side-ele">'
    + '<div class="side-title">'
    + '  <strong class="cfp">'
    + '  Organizer'
    + '</strong>'
    + '</div>'
    + '<div >'
    + '<a target="_blank" href="https://ahduni.edu.in/">'
    + '  <img width="80%" src="../static/images/Sidebar/ahmedabad-university-logo-db.png">'
    + '</a>'
    + '</div>'
    + '</div>'
    + '<div class="side-ele">'
    + '<div class="side-title">'
    + '  <strong class="cfp">'
    + '  Publisher'
    + '</strong>'
    + '</div>'
    + '<div >'
    + '<a target="_blank" href="https://www.springer.com/gp/computer-science/lncs">'
    + '  <img width="60%" src="../static/images/Sidebar/Springer LNCS.png">'
    + '</a>'
    + '</div>'
    + '</div>'
    + '<div>'
    + '<div class="bottom-title">'
    + '<strong class="cfp">'
    + 'Sponsors'
    + '</strong>'
    + '</div>'
    + '<center>'
    + '<section class="sponsors slider">'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.sprinklr.com/">'
    + '<img width="75%" src="../static/images/Sidebar/sprinklr_logo.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.nutanix.com/en">'
    + '<img width="75%" src="../static/images/Sidebar/Nutanx_YEC.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.sac.gov.in/Vyom/index.jsp">'
    + '<img width="75%" src="../static/images/Sidebar/SAC-ISRO.jpg"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.meditab.com/">'
    + '<img width="75%" src="../static/images/Sidebar/Meditab Logo.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://userresearch.google.com/">'
    + '<img width="75%" src="../static/images/Sidebar/Google Research Logo.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.devitpl.com/">'
    + '<img width="40%" src="../static/images/Sidebar/DEVIT.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.einfochips.com">'
    + '<img width="75%" src="../static/images/Sidebar/einfochips_logo.png"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://www.gatewaytechnolabs.com/">'
    + '<img width="75%" src="../static/images/Sidebar/Gateway.jpg"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://gujcost.gujarat.gov.in/">'
    + '<img width="80%" src="../static/images/Sidebar/DST.jpg"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://ahduni.edu.in/scs/">'
    + '<img width="75%" src="../static/images/Sidebar/Alumini SCS.jpg"></a>'
    + '</div>'
    + '</div>'
    + '<div class="bottom-ele">'
    + '<div class="bottom-img">'
    + '<a target="_blank" href="https://ishanitech.biz/ishan_infotech/contactus.html">'
    + '<img width="45%" src="../static/images/Sidebar/ishan.jpg"></a>'
    + '</div>'
    + '</div>'
    + '</section>'
    + '</center>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</center>'
    + '</div>';

  $('#container').append(sidebarHtml);

});
