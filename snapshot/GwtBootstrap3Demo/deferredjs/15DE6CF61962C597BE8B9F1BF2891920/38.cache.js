$wnd.GwtBootstrap3Demo.runAsyncCallback38("function kvc(){}\nfunction ovc(){}\nfunction qvc(){}\nfunction rvc(){rvc=a5;nvc=new qvc}\nfunction jvc(){Swb(this,lvc(new mvc))}\nfunction Qcc(a){Qlb.call(this,a);Pcc(this)}\nfunction dvc(a,b,c){hwb();Dwb.call(this,a,b,c,(jdc(),idc))}\nfunction mvc(){this.a=(new ovc,rvc(),nvc);pvc(this.a)}\nfunction lxc(a){var b;if(!a.F){b=new jvc(new kvc);a.F=b}return a.F}\nfunction kxc(a){var b;if(!a.D){b=new dvc(Ivb(fxb(a.a)),lxc(a),jxc(a));_vb((ixb(a.a),b),uxb(ixb(a.a)));a.D=b}return a.D}\nfunction pvc(a){if(!a.a){a.a=true;tu((pA(),'.GPBYFDEEL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFL{margin-top:0 !important;}.GPBYFDEGL{margin-left:5px;}'));return true}return false}\nfunction lvc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new GRb;_Lb(a,(b=new iOb(FYc),_Lb(b,(c=new zQb,c.a='Offline',yQb(c),c)),_Lb(b,(d=new XMb,_Lb(d,(e=new NOb((GZb(),DZb)),Z8((rgb(),e.db),'GPBYFDEFL',true),bdc(e.b,n2c),aMb(e,e.b,0),e)),_Lb(d,new Xcc((j=new ZCb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new W6(j.a)).a)),_Lb(d,(f=new XCc,xRb(f,(k=new ZCb,k.a+=o2c,new W6(k.a)).a),Z8(f.db,KYc,true),f)),_Lb(d,new Xcc((l=new ZCb,l.a+=p2c,new W6(l.a)).a)),_Lb(d,(g=new XCc,xRb(g,(m=new ZCb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new W6(m.a)).a),Z8(g.db,KYc,true),g)),Z8(d.db,'GPBYFDEEL',true),d)),_Lb(b,(h=new LQb,_Lb(h,(n=new $Qb,_Lb(n,(o=new NOb(CZb),bdc(o.b,'What is Offline?'),aMb(o,o.b,0),o)),n)),_Lb(h,(p=new NQb,_Lb(p,new Qcc((q=new ZCb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new W6(q.a)).a)),p)),_Lb(h,new XQb),h)),_Lb(b,(i=new LQb,_Lb(i,(r=new $Qb,_Lb(r,(s=new NOb(CZb),bdc(s.b,'How to configure?'),aMb(s,s.b,0),s)),r)),_Lb(i,(t=new NQb,_Lb(t,new Xcc((u=new ZCb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new W6(u.a)).a)),_Lb(t,(v=new XCc,xRb(v,(w=new ZCb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new W6(w.a)).a),Z8(v.db,KYc,true),v)),_Lb(t,new Xcc((A=new ZCb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new W6(A.a)).a)),_Lb(t,(B=new XCc,xRb(B,(C=new ZCb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new W6(C.a)).a),Z8(B.db,KYc,true),B)),_Lb(t,new Xcc((D=new ZCb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new W6(D.a)).a)),_Lb(t,(F=new XCc,xRb(F,(G=new ZCb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new W6(G.a)).a),Z8(F.db,KYc,true),F)),t)),_Lb(i,new XQb),i)),b));return a}\n_4(350,227,aXc,Qcc);_4(790,47,RVc,dvc);var N$=qBb(vYc,'OfflinePresenter',790);_4(1001,SVc,TVc,jvc);var S$=qBb(vYc,'OfflineView',1001);_4(1202,1,{},kvc);var R$=qBb(vYc,'OfflineView_BinderImpl',1202);_4(1203,1,{},mvc);var O$=qBb(vYc,'OfflineView_BinderImpl/Widgets',1203);_4(1478,1,{},ovc);var nvc;var Q$=qBb(vYc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1478);_4(1479,1,{},qvc);_.a=false;var P$=qBb(vYc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1479);_4(718,1,ZXc);_.Ob=function syc(){Eyb(this.b,kxc(this.a.a))};JTc(hm)(38);\n//# sourceURL=GwtBootstrap3Demo-38.js\n")