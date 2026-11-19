// Admission Documents by Year
const admissionDocs = {
  firstYear: ["10th Marksheet", "12th Marksheet", "Aadhar Card", "Passport-size Photos", "College Admission Form"],
  secondYear: ["Xerox of First Year Marksheet", "Aadhar Card", "Fee Receipt", "Registration Form"],
  thirdYear: ["Xerox of Second Year Marksheet", "Aadhar Card", "Fee Receipt", "Registration Form"]
};

// Courses Offered
const courses = [
  { name: "B.Sc. (Computer Science)", description: "Focuses on programming, algorithms, and system design." },
  { name: "Bachelor of Computer Application (BCA)", description: "Covers software development, web technologies, and databases." },
  { name: "B.Sc. (Biotechnology)", description: "Explores biological systems and lab techniques." },
  { name: "B.Sc. (Bioinformatics)", description: "Combines biology with data science and computational tools." },
  { name: "M.Sc. (Software Engineering)", description: "Advanced software architecture, testing, and project management." },
  { name: "M.Sc. (Biotechnology)", description: "Research-focused program in molecular biology and genetics." },
  { name: "M.Sc. (Bioinformatics)", description: "Focuses on algorithmic aspects of modern bioinformatics." },
  { name: "M.Sc. (Electronics)", description: "Equips students with knowledge in electronics systems and technologies." }
];

// Fee Structure
const feeStructure = {
  "B.Sc. (Computer Science)": [20600, 20600, 20600],
  "Bachelor of Computer Application (BCA)": [20600, 20600, 20600],
  "B.Sc. (Biotechnology)": [25550, 25550, 25550],
  "B.Sc. (Bioinformatics)": [25550, 25550, 25550],
  "M.Sc. (Software Engineering)": [27200, 27200],
  "M.Sc. (Biotechnology)": [39300, 39300],
  "M.Sc. (Bioinformatics)": [28000, 28000],
  "M.Sc. (Electronics)": [18000, 18000]
};

// Achievements
const achievements = [
  "Ranked among top colleges in Maharashtra for IT education.",
  "Students placed in Infosys, TCS, Wipro, and Cognizant.",
  "Winners of inter-college hackathons and tech fests.",
  "Research publications in national and international journals.",
  "Active participation in Smart India Hackathon and other national events."
];

// Facilities
const facilities = [
  "Separate hostels for boys and girls",
  "Wi-Fi enabled campus",
  "Modern computer and biotech labs",
  "Library with digital access",
  "Canteen and recreation areas",
  "Transport services",
  "Seminar halls and auditorium",
  "Sports facilities"
];
// Grammar correction (basic)
function correctGrammar(inputText) {
  let corrected = inputText.replace(/\brecieve\b/gi, "receive");
  corrected = corrected.replace(/\bteh\b/gi, "the");
  corrected = corrected.replace(/\badmissionn\b/gi, "admission");
  corrected = corrected.replace(/\bclg\b/gi, "college");
  corrected = corrected.replace(/\bpls\b/gi, "please");
  return corrected;
}
// Main Chat Function
function sendMessage() {
  const inputField = document.getElementById("user-input");
const input = correctGrammar(inputField.value.trim());

  if (input === "") return;

  appendMessage("You", input, "user");
  showTypingIndicator();

  setTimeout(() => {
    const query = input.toLowerCase();
    let response = "";

    // Reply to hello/hi
    if (query === "hello" || query === "hi") {
      response = `
        <strong>Hello!</strong><br>
        How can I help you today?
      `;
      appendMessage("MGM", response, "bot");
      hideTypingIndicator();
      inputField.value = "";
      return;
    }
// Staff info
else if (query.includes("staff") || query.includes("faculty")) {
  response = `
    <strong>Faculty Members:</strong><br>
    • Dr. Mrs. K.A. Nandedkar – Vice Principal, HOD CS & IT<br>
    • Mr. Vishal M. Pathak – Assistant Professor<br>
    • Dr. Smita Ashok Bhopi – Assistant Professor<br>
    • Dr. Sunil Vasant Dahale – Assistant Professor<br>
    • Mrs. Manisha Jadhav – Assistant Professor<br>
    • Mr. Girish Deshpande – Assistant Professor<br>
    • Mr. Kedar Dad   Professor<br>
  `;
  appendMessage("MGM", response, "bot");
}

// NSS info
else if (query.includes("nss")) {
  response = `
    <strong>NSS Unit:</strong><br>
    • Community service & social awareness campaigns<br>
    • Disaster relief activities<br>
    • Leadership & civic responsibility programs<br><br>
    <em>Note: 75% attendance is compulsory for NSS participation.</em>
  `;
  appendMessage("MGM", response, "bot");
}

// Labs info
else if (query.includes("lab") || query.includes("labs")) {
  response = `
    <strong>Labs at MGM:</strong><br>
    • Modern computer labs with latest hardware/software<br>
    • Biotech labs for molecular biology & genetics<br>
    • Networking and software development facilities<br><br>
    <em>Note: 75% attendance is compulsory for lab sessions.</em>
  `;
  appendMessage("MGM", response, "bot");
}
// Canteen info
else if (query.includes("canteen") || query.includes("food")) {
  response = `
    <strong>Canteen Facilities:</strong><br>
    • Affordable meals and snacks<br>
    • Hygienic environment with seating space<br>
    • Open during college hours for students and staff<br><br>
  `;
  appendMessage("MGM", response, "bot");
}

// Test schedule & PTM
else if (query.includes("test") || query.includes("exam") || query.includes("ptm") || query.includes("parent teacher")) {
  response = `
    <strong>Test & PTM Schedule:</strong><br>
    • Internal tests conducted twice per semester<br>
    • Pre-lims can be taken before university exams<br>
    • Parent-Teacher Meetings after major exams<br>
    • Attendance and performance reports shared during PTM<br><br>
    <em>Note: 75% attendance is compulsory to appear for exams.</em>
  `;
  appendMessage("MGM", response, "bot");
}

    // Hostel info
    else if (query.includes("hostel")) {
      response = `
        <strong>Hostel Info:</strong><br>
        Separate hostels for boys and girls with mess, Wi-Fi, and security.<br><br>
        <u>Girls Hostel:</u> +91-2462-221234<br>
        <u>Boys Hostel:</u> +91-2462-221567
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-girls-hostel");
      appendImage("img-boys-hostel");
    }

    //  Location with  Google Maps iframe
    else if (
      query.includes("location") || 
      query.includes("campus") || 
      query.includes("where") || 
      query.includes("address") || 
      query.includes("find") || 
      query.includes("reach") || 
      query.includes("map")
    ) {
      response = `
        <strong>College Location:</strong><br>
        MGM's College of CS & IT is located on Airport Road, Nanded, Maharashtra 431605.<br><br>
        <a href="https://www.google.com/maps?q=MGM+College+of+CS+%26+IT+Nanded" target="_blank">Open in Google Maps</a>
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-map");
    }

    //  Holidays
    else if (query.includes("holiday") || query.includes("holidays") || query.includes("vacation")) {
      response = `
        <strong>Academic Holidays:</strong><br>
        • Republic Day – 26 Jan<br>
        • Independence Day – 15 Aug<br>
        • Diwali Break – 1 week<br>
        • Christmas – 25 Dec<br>
        • Summer Vacation – May–June
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-holidays");
    }

    //  Student Activities
    else if (
      query.includes("activity") || 
      query.includes("activities") || 
      query.includes("student activities") || 
      query.includes("college events") || 
      query.includes("fest") || 
      query.includes("cultural") || 
      query.includes("tech fest")
       )
        {
      response = `
        <strong>Student Activities at MGM:</strong><br>
        • Tech Expo and Hackathons<br>
        • Coding Contests and Web Challenges<br>
        • Cultural Shows and Annual Fest<br>
        • Seminars, Workshops, and Guest Talks<br>
        • Sports Events and Inter-college Competitions
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-cultural");
    }
    // About college
    else if (query.includes("about") || query.includes("college")) {
      response = `
        <strong>About MGM College:</strong><br>
        Affiliated to SRTMU, known for tech-driven education and vibrant campus.<br>
        <strong>Address:</strong> Airport Road, Nanded, Maharashtra 431605
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-campus");
    }

    // Placement
    else if (query.includes("placement") || query.includes("job")) {
      response = `
        <strong>Placement Highlights:</strong><br>
        • Top Recruiters: Accenture, TCS, Wipro, Infosys<br>
        • Avg Package: ₹4 LPA<br>
        • Internships with startups & labs
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-placement");
    }

    // Admission Documents (specific year support)
else if (query.includes("document") || query.includes("admission")) {
  if (query.includes("first")) {
    response = `<strong>First Year Documents:</strong><br>${admissionDocs.firstYear.map(doc => `• ${doc}`).join("<br>")}`;
  } else if (query.includes("second")) {
    response = `<strong>Second Year Documents:</strong><br>${admissionDocs.secondYear.map(doc => `• ${doc}`).join("<br>")}`;
  } else if (query.includes("third")) {
    response = `<strong>Third Year Documents:</strong><br>${admissionDocs.thirdYear.map(doc => `• ${doc}`).join("<br>")}`;
  } else {
    response = `<strong>All Admission Documents:</strong><br>
      <u>First Year:</u><br>${admissionDocs.firstYear.join("<br>")}<br><br>
      <u>Second Year:</u><br>${admissionDocs.secondYear.join("<br>")}<br><br>
      <u>Third Year:</u><br>${admissionDocs.thirdYear.join("<br>")}
    `;
  }
  appendMessage("MGM", response, "bot");
}


    //  Courses (specific course support)
else if (query.includes("course") || query.includes("program")) {
  let matchedCourse = null;
  for (let course of courses) {
    if (query.includes(course.name.toLowerCase())) {
      matchedCourse = course;
      break;
    }
  }

  if (matchedCourse) {
    // Show only the matched course
    response = `<strong>${matchedCourse.name}:</strong><br>• ${matchedCourse.description}`;
  } else {
    // Default: show all courses
    response = `<strong>Courses Offered:</strong><br>`;
    courses.forEach(course => {
      response += `<u>${course.name}</u><br>• ${course.description}<br><br>`;
    });
  }

  appendMessage("MGM", response, "bot");
}


    //  Fees (specific year support)
else if (query.includes("fee") || query.includes("fees")) {
  let matchedCourse = null;
  for (let course in feeStructure) {
    if (query.includes(course.toLowerCase())) {
      matchedCourse = course;
      break;
    }
  }

  if (matchedCourse) {
    const fees = feeStructure[matchedCourse];

    if (query.includes("first")) {
      response = `<strong>${matchedCourse} - First Year Fee:</strong><br>₹${fees[0]}`;
    } else if (query.includes("second")) {
      response = `<strong>${matchedCourse} - Second Year Fee:</strong><br>₹${fees[1]}`;
    } else if (query.includes("third")) {
      if (fees[2]) {
        response = `<strong>${matchedCourse} - Third Year Fee:</strong><br>₹${fees[2]}`;
      } else {
        response = `<strong>${matchedCourse}:</strong><br>No third year fee (course is only 2 years).`;
      }
    } else {
      // Default: show all years if no specific year mentioned
      response = `<strong>Fees for ${matchedCourse}:</strong><br>`;
      fees.forEach((fee, i) => {
        response += `• Year ${i + 1}: ₹${fee}<br>`;
      });
    }
  } else {
    // If no course matched, show all fee structures
    response = `<strong>All Fee Structures:</strong><br>`;
    for (let course in feeStructure) {
      response += `<u>${course}</u><br>`;
      feeStructure[course].forEach((fee, i) => {
        response += `• Year ${i + 1}: ₹${fee}<br>`;
      });
      response += `<br>`;
    }
  }
  appendMessage("MGM", response, "bot");
}

    // Achievements
    else if (query.includes("achievement") || query.includes("award")) {
      response = `<strong>Achievements:</strong><br>${achievements.map(a => `• ${a}`).join("<br>")}`;
      appendMessage("MGM", response, "bot");
    }

    // Facilities
    else if (query.includes("facility") || query.includes("facilities")) {
      response = `<strong>Facilities:</strong><br>${facilities.map(f => `• ${f}`).join("<br>")}`;
      appendMessage("MGM", response, "bot");
    }

    // Contact
    else if (query.includes("contact")) {
      response = `
        <strong>Contact Us:</strong><br>
        Phone: +91-2462-123456<br>
        Email: mgmcsit@nanded.edu.in
      `;
      appendMessage("MGM", response, "bot");
    }

    // Sports
    else if (
      query.includes("sports") || 
      query.includes("games") || 
      query.includes("physical activities") || 
      query.includes("sports event")
    ) {
      response = `
        <strong>Sports at MGM:</strong><br>
        • Annual Sports Meet<br>
        • Cricket, Football, Volleyball Tournaments<br>
        • Indoor Games: Chess, Carrom<br>
        • Inter-college Competitions
      `;
      appendMessage("MGM", response, "bot");
      appendImage("img-sports");
    }

    // Fallback if nothing matches
    else {
      response = `
        Sorry, I couldn't understand your question.<br>
        If you'd like help, please enter your email and we'll get back to you.<br>
        <input type="email" placeholder="Your email here" style="padding:5px; width:90%;">
      `;
      appendMessage("MGM", response, "bot");
    }

    hideTypingIndicator();
    inputField.value = "";
  }, 800);
}
// Add message to chat box
function appendMessage(sender, text, type) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show image/iframe from hidden container
function appendImage(imageId) {
  const chatBox = document.getElementById("chat-box");
  const imageContainer = document.getElementById(imageId);
  if (imageContainer) {
    const clone = imageContainer.cloneNode(true);
    clone.style.display = "block";
    clone.className = "message bot";
    chatBox.appendChild(clone);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Show typing indicator
function showTypingIndicator() {
  const chatBox = document.getElementById("chat-box");
  const typing = document.createElement("div");
  typing.id = "typing-indicator";
  typing.className = "message bot";
  typing.innerHTML = "<em>MGM is typing...</em>";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  const typing = document.getElementById("typing-indicator");
  if (typing) typing.remove();
}

// Open image modal
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "block";
}

// Close image modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Enter key behavior with Shift+Enter support
document.getElementById("user-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});
