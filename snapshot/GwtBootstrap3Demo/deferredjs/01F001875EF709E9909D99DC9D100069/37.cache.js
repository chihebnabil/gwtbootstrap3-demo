$wnd.GwtBootstrap3Demo.runAsyncCallback37("function Mpc(){}\nfunction Qpc(){}\nfunction Spc(){}\nfunction Tpc(){Tpc=C3;Ppc=new Spc}\nfunction Lpc(){asb(this,Npc(new Opc))}\nfunction O7b(a){ujb.call(this,a);N7b(this)}\nfunction Fpc(a,b,c){rrb();Nrb.call(this,a,b,c,(h8b(),g8b))}\nfunction Opc(){this.a=(new Qpc,Tpc(),Ppc);Rpc(this.a)}\nfunction Orc(a){var b;if(!a.F){b=new Lpc(new Mpc);a.F=b}return a.F}\nfunction Nrc(a){var b;if(!a.D){b=new Fpc(Sqb(psb(a.a)),Orc(a),Mrc(a));jrb((ssb(a.a),b),Esb(ssb(a.a)));a.D=b}return a.D}\nfunction Rpc(a){if(!a.a){a.a=true;fu((Nz(),'.GPBYFDEEL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFL{margin-top:0 !important;}.GPBYFDEGL{margin-left:5px;}'));return true}return false}\nfunction Npc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new KMb;cHb(a,(b=new mJb($Sc),cHb(b,(c=new DLb,c.a='Offline',CLb(c),c)),cHb(b,(d=new _Hb,cHb(d,(e=new RJb((EUb(),BUb)),w7((Ieb(),e.db),'GPBYFDEFL',true),_7b(e.b,DYc),dHb(e,e.b,0),e)),cHb(d,new V7b((j=new Vxb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new w5(j.a)).a)),cHb(d,(f=new yxc,BMb(f,(k=new Vxb,k.a+=EYc,new w5(k.a)).a),w7(f.db,dTc,true),f)),cHb(d,new V7b((l=new Vxb,l.a+=FYc,new w5(l.a)).a)),cHb(d,(g=new yxc,BMb(g,(m=new Vxb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new w5(m.a)).a),w7(g.db,dTc,true),g)),w7(d.db,'GPBYFDEEL',true),d)),cHb(b,(h=new PLb,cHb(h,(n=new cMb,cHb(n,(o=new RJb(AUb),_7b(o.b,'What is Offline?'),dHb(o,o.b,0),o)),n)),cHb(h,(p=new RLb,cHb(p,new O7b((q=new Vxb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new w5(q.a)).a)),p)),cHb(h,new _Lb),h)),cHb(b,(i=new PLb,cHb(i,(r=new cMb,cHb(r,(s=new RJb(AUb),_7b(s.b,'How to configure?'),dHb(s,s.b,0),s)),r)),cHb(i,(t=new RLb,cHb(t,new V7b((u=new Vxb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new w5(u.a)).a)),cHb(t,(v=new yxc,BMb(v,(w=new Vxb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new w5(w.a)).a),w7(v.db,dTc,true),v)),cHb(t,new V7b((A=new Vxb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new w5(A.a)).a)),cHb(t,(B=new yxc,BMb(B,(C=new Vxb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new w5(C.a)).a),w7(B.db,dTc,true),B)),cHb(t,new V7b((D=new Vxb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new w5(D.a)).a)),cHb(t,(F=new yxc,BMb(F,(G=new Vxb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new w5(G.a)).a),w7(F.db,dTc,true),F)),t)),cHb(i,new _Lb),i)),b));return a}\nB3(340,223,xRc,O7b);B3(770,46,mQc,Fpc);var nZ=vwb(QSc,'OfflinePresenter',770);B3(978,nQc,oQc,Lpc);var sZ=vwb(QSc,'OfflineView',978);B3(1175,1,{},Mpc);var rZ=vwb(QSc,'OfflineView_BinderImpl',1175);B3(1176,1,{},Opc);var oZ=vwb(QSc,'OfflineView_BinderImpl/Widgets',1176);B3(1431,1,{},Qpc);var Ppc;var qZ=vwb(QSc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1431);B3(1432,1,{},Spc);_.a=false;var pZ=vwb(QSc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1432);B3(699,1,sSc);_.Jb=function Vsc(){Otb(this.b,Nrc(this.a.a))};kOc(am)(37);\n//# sourceURL=GwtBootstrap3Demo-37.js\n")