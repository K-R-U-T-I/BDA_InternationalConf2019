

$(function () {

  

  var headerHtml = ''

    + '<div class="header">'

    + '    <div class="top" style="background-image: url(static/images/bdaau2019/au_slider.jpg);      ">'

    + '       <div class="container">'
    /*
    + '            <img class="logo" src="../static/images/scc/logo-scc.png"/>' 
    */

    + '            <div class="heading">'

    + '                <p></p>'

    + '                <p>Ahmedabad University, India</p> <br/> '
       + '               <p> December 17 - 20, 2019</p> <br/>'


    + '                <p style="font-size: 40px; text-align: center"><a href="index.html">The Seventh International Conference on Big Data Analytics</a></p> '

    + '            </div>'

    + '        </div>'

    + '    </div>'

  +'  <div class="container">'
  +'  <center>'
  +'    <div class="bottom-title">'
  +'      <strong class="cfp">'
  +'        Sponsors'
  +'      </strong>'
  +'    </div>'
  +'    <section class="sponsors slider">'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.sprinklr.com/">'
  +'            <img width="75%" src="static/images/Sidebar/sprinklr_logo.png"></a'>
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.nutanix.com/en">'
  +'            <img width="75%" src="static/images/Sidebar/Nutanx_YEC.png"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.sac.gov.in/Vyom/index.jsp">'
  +'            <img width="75%" src="static/images/Sidebar/SAC-ISRO.jpg"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.meditab.com/">'
  +'            <img width="75%" src="static/images/Sidebar/Meditab Logo.png"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://userresearch.google.com/">'
  +'            <img width="75%" src="static/images/Sidebar/Google Research Logo.p'ng"></a>
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.devitpl.com/">'
  +'            <img width="40%" src="static/images/Sidebar/DEVIT.png"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.einfochips.com">'
  +'            <img width="75%" src="static/images/Sidebar/einfochips_logo.png"><'/a>
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://www.gatewaytechnolabs.com/">'
  +'            <img width="75%" src="static/images/Sidebar/Gateway.jpg"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://gujcost.gujarat.gov.in/">'
  +'            <img width="80%" src="static/images/Sidebar/DST.jpg"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://ahduni.edu.in/scs/">'
  +'            <img width="75%" src="static/images/Sidebar/Alumini SCS.jpg"></a>'
  +'        </div>'
  +'      </div>'
  +'      <div class="bottom-ele">'
  +'        <div class="bottom-img">'
  +'          <a target="_blank" href="https://ishanitech.biz/ishan_infotech/contactus.html">'
  +'            <img width="45%" src="static/images/Sidebar/ishan.jpg"></a>'
  +'        </div>'
  +'      </div>'
  +'    </section>'
  +'  </center>'
  +  '</div>'

+ '<nav class="navbar navbar-expand-lg navbar-light bg-light">'
+ '  <a class="navbar-brand" href="#">Navbar</a>'
+ '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
+ '    <span class="navbar-toggler-icon"></span> </button>'
+ '  <div class="collapse navbar-collapse" id="navbarNav">'
+ '    <ul class="navbar-nav">'
+ '      <li class="nav-item active">'
+ '        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>'
+ '      </li>'
+ '      <li class="nav-item">'
+ '        <a class="nav-link" href="#">Features</a>'
+ '      </li>'
+ '      <li class="nav-item">'
+ '        <a class="nav-link" href="#">Pricing</a>'
+ '      </li>'
+ '      <li class="nav-item">'
+ '        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>'
+ '      </li>'
+ '    </ul>'
+ '  </div>'
+ '</nav>  '

    + '    <div class="nav">'

    + '        <ul class="nav-list container">'

    + '            <li class="nav-item">'

    + '                <a href="index.html" title="">Home</a>'

    + '            </li>'

    
/*
    + '            <li class="nav-item">'

    + '                <a href="about.html" class="nav-drop">About</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="about.html" title="Overview">Overview</a></li>'

    + '                    <li><a href="news.html" title="News">News</a></li>'

    + '                    <li><a href="organization.html" title="Organizing Committee">Organizing Committee</a></li>'

    + '                    <li><a target="_blank" href="http://www.servicessociety.org/photos/2018/" title="Highlights">2018 Highlights</a></li>'

    + '                </ul>'

    + '            </li>'

    + '            <li class="nav-item">'

    + '                <a href="program.html" class="nav-drop">Conference</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="program.html" title="Advance Program">Advance Program</a></li>'

    + '                    <li><a href="keynote.html" title="Keynotes">Keynotes</a></li>'

    + '                    <li><a href="panel.html" title="Keynote Panels">Keynote Panels</a></li>'

    + '                    <li><a href="tutorial.html" title="Tutorials">Tutorials</a></li>'

    + '                    <li><a href="event.html" title="Significant Events">Significant Events</a></li>'

    + '                </ul>'

    + '            </li>'

    + '            <li class="nav-item">'

    + '                <a href="cfp.html" class="nav-drop">Paper</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="cfp.html" title="Call for Papers">Call for Papers</a></li>'

    + '                    <li><a href="submission.html" title="Submission">Submission</a></li>'

    + '                    <li><a href="research.html" title="Research Track">Research Track</a></li>'

    + '                    <li><a href="application.html" title="Application Track">Application Track</a></li>'

    + '                    <li><a href="short.html" title="Short Paper Track">Short Paper Track</a></li>'

    + '                    <li><a href="literature.html" title="Literature Recommendations">Literature Recommendations</a></li>'

    + '                </ul>'

    + '            </li>'

    + '            <li class="nav-item">'

    + '                <a href="registration.html" class="nav-drop">Register</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="registration.html" title="Registration">Registration</a></li>'

    + '                    <li><a href="hotel.html" title="Hotel">Hotel</a></li>'

    + '                    <li><a href="poster.html" title="On-Site Poster Template">On-Site Poster Template</a></li>'

    + '                </ul>'

    + '            </li>'

    

    + '            <li class="nav-item">'

    + '                <a href="sponsorship.html" class="nav-drop">Cooperation</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="stsc.html" title="STSC Papers">STSC Journal Papers</a></li>'

    + '                    <li><a href="sponsorship.html" title="Sponsorship Program">Sponsorship Program</a></li>'
    + '                    <li><a href="CommunitySupport.html" title="Community Support">Community Support</a></li>'
    + '                </ul>'

    + '            </li>'

    + '            <li class="nav-item">'

    + '                <a href="shenzhen.html" class="nav-drop">Satellite Sessions</a>'

    + '                <ul class="nav-dropmenu">'

    + '                    <li><a href="shenzhen.html" title="Shenzhen, China">Shenzhen, China</a></li>'

    + '                </ul>'

    + '            </li>'

    + '            <li class="nav-item">'

    + '                <a href="history.html" title="SCF">SCF</a>'

    + '            </li>'
    */


  + '            <li class="nav-item">'

  + '                <a href="committee.html" title="SCF">Committee</a>'

  + '            </li>'

  + '            <li class="nav-item">'

  + '                <a href="" title="SCF">Keynote and Invited Speakers</a>'

  + '            </li>'


  + '            <li class="nav-item">'

  + '                <a href="pages/callforpapers.html" title="SCF">Call for Papers</a>'

  + '            </li>'

  + '            <li class="nav-item">'

  + '                <a href="" title="SCF">Tutorial Talks</a>'

  + '            </li>'

  + '            <li class="nav-item">'

  + '                <a href="" title="SCF">Workshops</a>'

  + '            </li>'


    + '            <li class="nav-item">'

    + '                <a href="pages/contactus.html" title="SCF">Contact Us</a>'

    + '            </li>'    

  + '            <li class="nav-item">'

  + '                <a href="" title="SCF">Travel and Accommodation</a>'

  + '            </li>'





  + '            <li class="nav-item">'

  + '                <a href="pages/committee.html" title="SCF">Committee</a>'

  + '            </li>'




    + '            <li class="nav-item">'

    + '                <a href="pages/gallery.html" title="SCF">Gallery</a>'

    + '            </li>'
                    

    + '        </ul>'

    + '    </div>'

    + '</div>';

  

  $('body').prepend(headerHtml);

});







