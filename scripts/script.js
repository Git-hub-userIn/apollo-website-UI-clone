const navList = Array.from(document.getElementsByClassName("navItem"));
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

function createUL(options){
    const ulElement = document.createElement("ul")
    options.forEach(element => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = element;
        li.appendChild(a);
        ulElement.appendChild(li);
    });
    ulElement.classList.add("hiddenNavDropdown");
    return ulElement;
}


navList.forEach((element)=>{
    element.appendChild(createUL(options));
})


// ************************************************************ for footer ************************************************************************ //

const footer = document.querySelector("footer");

const footerDataObject = {
    'Patient Care' : ['Find A Doctor', 'Medical Services', 'Patient Testimonials', 'Value Added Services', 'Pay Online', 'Apollo Surgery'],
    'International Patients' : ['About Apollo', 'Hospitals'],
    'News And Media' : ['News', 'Events', 'Interviews', 'Watch Our Videos', 'Media Contact', 'Apollo Hospital Reviews'],
    'Centres Of Excellence' : ['Orthopaedics', 'Nephrology & Urology', 'Biatric Surgery', 'Cardiology', 'Pulmonology', 'Gasteroenterology'],
    'Medical Procedures' : ['Proton Therapy For Cancer Treatment', 'Cosmetic And Plastic Surgery', 'Bone Marrow Transplant', 'Oral And Maxillofacial Surgery', 'Hand MicroSurgery', 'G Scan - Open Standing MRI Scan', 'Hip Anthroscopy'],
    'Corporate' : ['Company OverView', 'Our Doctors Achieve', 'The Apollo Ethos', 'The Apollo Story', 'Management', 'Investor Relations', 'Initiatives', 'Awards And Accolades', 'Careers'],
    'Academics And Research' : ['Courses', 'Academics', 'Clinical Research', 'Honors List', 'Apollo Torch : Alumni Network', 'Web Broadcasts', 'Collaborative Forums', "What's New"],
    'Hospitals' : ['Hospitals In India', 'International Hospitals', 'Apollo Clinics', 'Reach Hospitals', 'Apollo Cradle', 'Apollo Fertility', 'Apollo Cancer Centers', 'Apollo Proton Centres'],
    'Blogs' : ['Health Library', 'COVID-19 Updates', 'COVID-19 FAQs', 'COVID-19 Vaccinations', 'COVID-19 New Symptoms'],
    'Contact Us' : ['Post A Query', 'Consult Doctors Online', 'Book Physical Assignment', 'Give Your Feedback', 'Apollo Lifeline']
}


function createFooterLinksDiv(footerDataObject){
    const containerAll = document.createElement("div");
    for(let key in footerDataObject){
        const container = document.createElement("div");
        container.classList.add("footerLinksContainer");
        const title = document.createElement("h3");
        title.innerHTML = key;
        container.appendChild(title);
        const links = footerDataObject[key];
        const linksList = document.createElement("ul");
        links.forEach((element)=>{
            const link = document.createElement("li");
            link.innerHTML = element;
            linksList.appendChild(link);
        })
        container.appendChild(linksList);
        containerAll.appendChild(container);
    }
    document.getElementById("testBtn").addEventListener('click',()=> writeInNewTab(containerAll));
    containerAll.id = "relatedLinks";
    return containerAll;
}


function writeInNewTab(HTMLelement){
    console.log("writing a new tab");
    const newTab = window.open("", "_blank");
    const doc = newTab.document;

    // Set up basic structure
    doc.title = "TEST";
    doc.body.appendChild(HTMLelement);
}

footer.appendChild(createFooterLinksDiv(footerDataObject));