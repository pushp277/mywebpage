
var ctr=0;
var ctr0=0;
function clickSearch(){
	var srch=document.getElementById("text");
	if(ctr==0){
	var img=document.getElementById("search");
	var create=document.createElement("input");
	var id=document.createAttribute('id');
	id.value="sec";
	var type=document.createAttribute("type");
	type.value="text"
	var name=document.createAttribute("name");
	name.value="search";
	img.style.transition="1s";
	img.style.transform="translateX(60vw)";
	create.style.transition="1s";
	create.setAttributeNode(id);
	create.setAttributeNode(type);
	create.setAttributeNode(name);
	
	
	
	srch.appendChild(create);
	ctr=1;
	}

	else{	

		var child=document.getElementById("sec");
		var img=document.getElementById("search");
		img.style.transform="translateX(0)";
		img.style.transition="1s";
		srch.removeChild(child);

	
		ctr=0;
	}

}



function clickNav(){
		var nav=document.getElementById("navbar");
		var navigation=document.getElementById("navigation");

	if(ctr0==0){
		
		nav.style.transition="1s";
		nav.style.transform="translateX(60vw)";
		var class1=document.createAttribute("id");
		var class2=document.createAttribute("id");
		var class3=document.createAttribute("id");
		var class4=document.createAttribute("id");
		
		class1.value="node";
		class2.value="node";
		class3.value="node";
		class4.value="node";
		var ancor1=document.createElement("a");
		var ancor2=document.createElement("a");
		var ancor3=document.createElement("a");
		var ancor4=document.createElement("a");
		ancor1.setAttributeNode(class1);
		ancor2.setAttributeNode(class2);
		ancor3.setAttributeNode(class3);
		ancor4.setAttributeNode(class4);
		var text1=document.createTextNode("HOME");
		var text2=document.createTextNode("BLOGS");
		var text3=document.createTextNode("GALLERY");
		var text4=document.createTextNode("CONTACT US");
		ancor1.appendChild(text1);
		ancor2.appendChild(text2);
		ancor3.appendChild(text3);
		ancor4.appendChild(text4);
		navigation.appendChild(ancor1);
		navigation.appendChild(ancor2);
		navigation.appendChild(ancor3);
		navigation.appendChild(ancor4);
		ctr0=1;
	}
	else{	
		var child=document.getElementById("node");
		var child1=child.nextElementSibling;
		var child2=child1.nextElementSibling;

		var child3=child2.nextElementSibling;

		nav.style.transition="1s";
		nav.style.transform="translateX(0)";
	
			navigation.removeChild(child);
			navigation.removeChild(child1);
			navigation.removeChild(child2);
			navigation.removeChild(child3);
		
		ctr0=0;
	}
}
