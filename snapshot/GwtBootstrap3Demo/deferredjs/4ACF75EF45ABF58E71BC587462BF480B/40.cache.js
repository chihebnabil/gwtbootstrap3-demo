$wnd.GwtBootstrap3Demo.runAsyncCallback40("function DVc(){}\nfunction HVc(){}\nfunction JVc(){}\nfunction KVc(){KVc=bjb;GVc=new JVc}\nfunction Kzc(a){AAb.call(this,a);Jzc(this)}\nfunction CVc(){MLb.call(this);KLb(this,EVc(new FVc))}\nfunction wVc(a,b,c){YKb();uLb.call(this,a,b,c,(bAc(),aAc))}\nfunction FVc(){this.a=(new HVc,KVc(),GVc);IVc(this.a)}\nfunction R$c(a){var b;if(!a.M){b=new CVc(new DVc);a.M=b}return a.M}\nfunction Q$c(a){var b;if(!a.L){b=new wVc(xKb(_Lb(a.a)),R$c(a),P$c(a));QKb((cMb(a.a),b),oMb(cMb(a.a)));a.L=b}return a.L}\nfunction IVc(a){if(!a.a){a.a=true;Rx((qE(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction EVc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new F7b;T0b(a,(b=new r3b(XQd),T0b(b,(c=new r6b,c.a='Offline',q6b(c),c)),T0b(b,(d=new e2b,T0b(d,(e=new d4b((jgc(),ggc)),fnb((Eub(),e.eb),'GPBYFDEFM',true),Yzc(e.b,_Wd),U0b(e,e.b,0),e)),T0b(d,new Szc((j=new eSb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Xkb(j.a)).a)),T0b(d,(f=new _4c,u7b(f,(k=new eSb,k.a+=aXd,new Xkb(k.a)).a),fnb(f.eb,aRd,true),f)),T0b(d,new Szc((l=new eSb,l.a+=bXd,new Xkb(l.a)).a)),T0b(d,(g=new _4c,u7b(g,(m=new eSb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Xkb(m.a)).a),fnb(g.eb,aRd,true),g)),fnb(d.eb,'GPBYFDEEM',true),d)),T0b(b,(h=new E6b,T0b(h,(n=new L6b,T0b(n,(o=new d4b(fgc),Yzc(o.b,'What is Offline?'),U0b(o,o.b,0),o)),n)),T0b(h,(p=new G6b,T0b(p,new Kzc((q=new eSb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Xkb(q.a)).a)),p)),T0b(h,new I6b),h)),T0b(b,(i=new E6b,T0b(i,(r=new L6b,T0b(r,(s=new d4b(fgc),Yzc(s.b,'How to configure?'),U0b(s,s.b,0),s)),r)),T0b(i,(t=new G6b,T0b(t,new Szc((u=new eSb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Xkb(u.a)).a)),T0b(t,(v=new _4c,u7b(v,(w=new eSb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Xkb(w.a)).a),fnb(v.eb,aRd,true),v)),T0b(t,new Szc((A=new eSb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Xkb(A.a)).a)),T0b(t,(B=new _4c,u7b(B,(C=new eSb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Xkb(C.a)).a),fnb(B.eb,aRd,true),B)),T0b(t,new Szc((D=new eSb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Xkb(D.a)).a)),T0b(t,(F=new _4c,u7b(F,(G=new eSb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Xkb(G.a)).a),fnb(F.eb,aRd,true),F)),t)),T0b(i,new I6b),i)),b));return a}\najb(409,233,BNd,Kzc);ajb(1016,44,NNd,wVc);var o7=uQb(NQd,'OfflinePresenter',1016);ajb(1255,47,ONd,CVc);var t7=uQb(NQd,'OfflineView',1255);ajb(1530,1,{},DVc);var s7=uQb(NQd,'OfflineView_BinderImpl',1530);ajb(1531,1,{},FVc);var p7=uQb(NQd,'OfflineView_BinderImpl/Widgets',1531);ajb(1882,1,{},HVc);var GVc;var r7=uQb(NQd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1882);ajb(1883,1,{},JVc);_.a=false;var q7=uQb(NQd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1883);ajb(938,1,hQd);_.Sb=function q_c(){HNb(this.b,Q$c(this.a.a))};hLd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")