$wnd.GwtBootstrap3Demo.runAsyncCallback40("function lUc(){}\nfunction pUc(){}\nfunction rUc(){}\nfunction sUc(){sUc=aib;oUc=new rUc}\nfunction syc(a){zzb.call(this,a);ryc(this)}\nfunction kUc(){uKb.call(this);sKb(this,mUc(new nUc))}\nfunction eUc(a,b,c){GJb();cKb.call(this,a,b,c,(Lyc(),Kyc))}\nfunction nUc(){this.a=(new pUc,sUc(),oUc);qUc(this.a)}\nfunction zZc(a){var b;if(!a.M){b=new kUc(new lUc);a.M=b}return a.M}\nfunction yZc(a){var b;if(!a.L){b=new eUc(fJb(JKb(a.a)),zZc(a),xZc(a));yJb((MKb(a.a),b),YKb(MKb(a.a)));a.L=b}return a.L}\nfunction qUc(a){if(!a.a){a.a=true;Kx((ND(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction mUc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new n6b;B_b(a,(b=new _1b(CPd),B_b(b,(c=new _4b,c.a='Offline',$4b(c),c)),B_b(b,(d=new O0b,B_b(d,(e=new N2b((Tec(),Qec)),emb((Etb(),e.eb),'GPBYFDEFM',true),Gyc(e.b,HVd),C_b(e,e.b,0),e)),B_b(d,new Ayc((j=new OQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Wjb(j.a)).a)),B_b(d,(f=new J3c,c6b(f,(k=new OQb,k.a+=IVd,new Wjb(k.a)).a),emb(f.eb,HPd,true),f)),B_b(d,new Ayc((l=new OQb,l.a+=JVd,new Wjb(l.a)).a)),B_b(d,(g=new J3c,c6b(g,(m=new OQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Wjb(m.a)).a),emb(g.eb,HPd,true),g)),emb(d.eb,'GPBYFDEEM',true),d)),B_b(b,(h=new m5b,B_b(h,(n=new t5b,B_b(n,(o=new N2b(Pec),Gyc(o.b,'What is Offline?'),C_b(o,o.b,0),o)),n)),B_b(h,(p=new o5b,B_b(p,new syc((q=new OQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Wjb(q.a)).a)),p)),B_b(h,new q5b),h)),B_b(b,(i=new m5b,B_b(i,(r=new t5b,B_b(r,(s=new N2b(Pec),Gyc(s.b,'How to configure?'),C_b(s,s.b,0),s)),r)),B_b(i,(t=new o5b,B_b(t,new Ayc((u=new OQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Wjb(u.a)).a)),B_b(t,(v=new J3c,c6b(v,(w=new OQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Wjb(w.a)).a),emb(v.eb,HPd,true),v)),B_b(t,new Ayc((A=new OQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Wjb(A.a)).a)),B_b(t,(B=new J3c,c6b(B,(C=new OQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Wjb(C.a)).a),emb(B.eb,HPd,true),B)),B_b(t,new Ayc((D=new OQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Wjb(D.a)).a)),B_b(t,(F=new J3c,c6b(F,(G=new OQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Wjb(G.a)).a),emb(F.eb,HPd,true),F)),t)),B_b(i,new q5b),i)),b));return a}\n_hb(410,233,hMd,syc);_hb(1018,44,sMd,eUc);var n6=cPb(sPd,'OfflinePresenter',1018);_hb(1257,47,tMd,kUc);var s6=cPb(sPd,'OfflineView',1257);_hb(1534,1,{},lUc);var r6=cPb(sPd,'OfflineView_BinderImpl',1534);_hb(1535,1,{},nUc);var o6=cPb(sPd,'OfflineView_BinderImpl/Widgets',1535);_hb(1883,1,{},pUc);var oUc;var q6=cPb(sPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1883);_hb(1884,1,{},rUc);_.a=false;var p6=cPb(sPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1884);_hb(940,1,OOd);_.Sb=function $Zc(){pMb(this.b,yZc(this.a.a))};RJd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")