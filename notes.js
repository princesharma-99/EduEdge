const semesterSelect = document.getElementById("semesterSelect");
const subjectSelect = document.getElementById("subjectSelect");
const notesContainer = document.getElementById("notesContainer");

// ✅ Each subject has 5 unit files
const notesData = {
  "1st Semester": {
    "Engineering Mathematics-I": {
      title: "Engineering Mathematics-I",
      units: {
        "Unit 1 (Differential Calculus – I)": "../Maths I/Differential%20Calculus%20–%20I.pdf",
        "Unit 2 (Differential Calculus – II)": "../Maths I/Differential%20Calculus%20–%20II.pdf",
        "Unit 3 (Differential Equation – I)": "../Maths I/Differential%20Equation%20-%20I.pdf",
        "Unit 4 (Differential Equation – II)": "../Maths I/Differential%20Equation%20–%20II.pdf",
        "Unit 5 (Partial Differential Equations)": "../Maths I/Partial%20Differential%20Equations.pdf"
      }
    },
    "Engineering Physics": {
      title: "Engineering Physics",
      units: {
        "Unit 1 (Wave Optics)": "../Physics/Wave%20Optics.pdf",
        "Unit 2 (Laser & Optical Fibers)": "../Physics/Laser%20&%20Optical%20Fibers.pdf",
        "Unit 3 (Quantum Mechanics)": "../Physics/Quantum%20Mechanics.pdf",
        "Unit 4 (Physics Of Advanced Materials)": "../Physics/Physics%20Of%20Advanced%20Materials.pdf",
        "Unit 5 (Electromagnetism)": "..//Physics/Electromagnetism.pdf"
      }
    },
    "Engineering Chemistry": {
      title: "Engineering Chemistry",
      units: {
        "Unit 1 (Water)": "../B Tech (1st Year)/Chemistry/Water.pdf",
        "Unit 2 (Organic Fuels)": "../B Tech (1st Year)/Chemistry/Organic%20Fuels.pdf",
        "Unit 3 (Corrosion)": "../B Tech (1st Year)/Chemistry/Corrosion.pdf",
        "Unit 4 (Engineering Materials)": "../B Tech (1st Year)/Chemistry/Engineering%20Materials.pdf",
        "Unit 5 (Green Chemistry)": "../B Tech (1st Year)/Chemistry/Green%20Chemistry.pdf"
      }
    },
    "Communication Skills": {
      title: "Communication Skills",
      units: {
        "Unit 1 (Communication Skills I - Speaking)": "../CS/Communication%20Skills%20I%20(Speaking).pdf",
        "Unit 2 (Communication Skills II - Listening and Reading)": "../CS/Communication%20Skills%20II%20(Listening%20and%20Reading).pdf",
        "Unit 3 (Communication Skills III - Writing Skills)": "../CS/Communication%20Skills%20III%20(Writing%20Skills).pdf",
        "Unit 4 (Essentials of Grammar)": "../CS/Essentials%20of%20Grammar.pdf",
        "Unit 5 (Communication Through Poems and Short Stories)": "../CS/Communication%20Through%20Poems%20and%20Short%20Stories.pdf"
      }
    },
    "Managerial Economics and Financial Accounting": {
      title: "Managerial Economics and Financial Accounting",
      units: {
        "Unit 1 (Introduction to Managerial Economics)": "../MEFA/Introduction%20to%20Managerial%20Economics.pdf",
        "Unit 2 (Theory of Demand)": "../MEFA/Theory%20of%20Demand.pdf",
        "Unit 3 (Production & Cost Analyses)": "../MEFA/Production%20&%20Cost%20Analyses.pdf",
        "Unit 4 (Market Structure and Pricing Theory)": "../MEFA/Market%20Structure%20and%20Pricing%20Theory.pdf",
        "Unit 5 (Types of Business Organization & Business Cycles)": "../MEFA/Types%20of%20Business%20Organization%20&%20Business%20Cycles.pdf",
        "Unit 6 (Financial Accounting and Ratio Analysis)": "../MEFA/Financial%20Accounting%20and%20Ratio%20Analysis.pdf"
      }
    },
    "Introduction to Built Environment": {
      title: "Introduction to Built Environment",
      units: {
        "Unit 1 (Built Environment & Elements of Built Environment)": "../IBE/Built%20Environment%20&%20Elements%20of%20Built%20Environment.pdf",
        "Unit 2 (Modern World Approaches Towards Built Environment)": "../IBE/Modern%20World%20Approaches%20Towards%20Built%20Environment.pdf",
        "Unit 3 (Role of Civil Engineering in Built Environment)": "../IBE/Role%20of%20Civil%20Engineering%20in%20Built%20Environment.pdf",
        "Unit 4 (Historical Architecture and Modern Structural Design & Construction)": "../IBE/Historical%20Architecture%20and%20Modern%20Structural%20Design%20&%20Construction.pdf",
        "Unit 5 (Building Physics, Ergonomics, and Comfort)": "../IBE/Building%20Physics,%20Ergonomics,%20and%20Comfort.pdf"
      }
    },
    "Basic Electrical Engineering": {
      title: "Basic Electrical Engineering",
      units: {
         "Unit 1 (Introduction)": "../BEE/Introduction.pdf",
         "Unit 2 (DC Circuits)": "../BEE/DC%20Circuits.pdf",
         "Unit 3 (AC Circuits)": "../BEE/AC%20Circuits.pdf",
         "Unit 4 (Transformer and DC Machines)": "../BEE/Transformer%20and%20DC%20Machines.pdf",
         "Unit 5 (Basic Electronic Devices & Thyristors)": "../BEE/Basic%20Electronic%20Devices%20%26%20Thyristors.pdf",
         "Unit 6 (Communication System)": "../BEE/Communication%20System.pdf"
      }
    },
    "Computer Fundamentals & Programming": {
      title: "Computer Fundamentals & Programming",
      units: {
        "Unit 1 (Fundamentals Of Computer & Number Systems)": "../CFP/Fundamentals%20Of%20Computer%20&%20Number%20Systems.pdf",
        "Unit 2 (C Language)": "../CFP/C%20Language.pdf",
        "Unit 3 (Control Statements and Loop In C)": "../CFP/Control%20Statements%20and%20Loop%20In%20C.pdf",
        "Unit 5 (Functions In C)": "../CFP/Functions%20In%20C.pdf",
        "Unit 4 (Arrays, Pointers & Structures in C)": "../CFP/Arrays%2C%20Pointers%20&%20Structures%20in%20C.pdf",
        "Unit 6 (Strings & Input or Output In C)": "../CFP/Strings%20&%20Input%20or%20Output%20In%20C.pdf"
      }
    },
    "Elements of Mechanical Engineering": {
      title: "Elements of Mechanical Engineering",
      units: {
        "Unit 1 (Thermodynamics & Second Law of Thermodynamics)": "../EME/Thermodynamics%20&%20Second%20Law%20of%20Thermodynamics.pdf",
        "Unit 2 (Vapour Power Cycles & Refrigeration and Air Conditioning)": "../EME/Vapour%20Power%20Cycles%20&%20Refrigeration%20and%20Air%20Conditioning.pdf",
        "Unit 3 (Gas Power Cycles & Internal Combustion Engines)": "../EME/Gas%20Power%20Cycles%20&%20Internal%20Combustion%20Engines.pdf",
        "Unit 4 (Materials and Manufacturing Processes)": "../EME/Materials%20And%20Manufacturing%20Processes.pdf",
        "Unit 5 (Power Transmission)": "../EME/Power%20Transmission.pdf"
      }
    }
  },
  "2nd Semester": {
    "Engineering Mathematics-II": {
      title: "Engineering Mathematics-II - 2023",
      units: {
        "Unit 1 (Integral Calculus)": "../Maths II/Integral%20Calculus.pdf",
        "Unit 2 (Vector Calculus)": "../Maths II/Vector%20Calculus.pdf",
        "Unit 3 (Application of Vector Calculus)": "../Maths II/Application%20of%20Vector%20Calculus.pdf",
        "Unit 4 (Coordinate Geometry of Three Dimensions)": "../Maths II/Coordinate%20Geometry%20of%20Three%20Dimensions.pdf",
        "Unit 5 (Matrices)": "../Maths II/Matrices.pdf"
      }
    },
    "Engineering Physics": {
      title: "Engineering Physics",
      units: {
        "Unit 1 (Wave Optics)": "../Physics/Wave%20Optics.pdf",
        "Unit 2 (Laser & Optical Fibers)": "../Physics/Laser%20&%20Optical%20Fibers.pdf",
        "Unit 3 (Quantum Mechanics)": "../Physics/Quantum%20Mechanics.pdf",
        "Unit 4 (Physics Of Advanced Materials)": "../Physics/Physics%20Of%20Advanced%20Materials.pdf",
        "Unit 5 (Electromagnetism)": "..//Physics/Electromagnetism.pdf"
      }
    },
    "Engineering Chemistry": {
      title: "Engineering Chemistry",
      units: {
        "Unit 1 (Water)": "../B Tech (1st Year)/Chemistry/Water.pdf",
        "Unit 2 (Organic Fuels)": "../B Tech (1st Year)/Chemistry/Organic%20Fuels.pdf",
        "Unit 3 (Corrosion)": "../B Tech (1st Year)/Chemistry/Corrosion.pdf",
        "Unit 4 (Engineering Materials)": "../B Tech (1st Year)/Chemistry/Engineering%20Materials.pdf",
        "Unit 5 (Green Chemistry)": "../B Tech (1st Year)/Chemistry/Green%20Chemistry.pdf"
      }
    },
    "Communication Skills": {
      title: "Communication Skills",
      units: {
        "Unit 1 (Communication Skills I - Speaking)": "../CS/Communication%20Skills%20I%20(Speaking).pdf",
        "Unit 2 (Communication Skills II - Listening and Reading)": "../CS/Communication%20Skills%20II%20(Listening%20and%20Reading).pdf",
        "Unit 3 (Communication Skills III - Writing Skills)": "../CS/Communication%20Skills%20III%20(Writing%20Skills).pdf",
        "Unit 4 (Essentials of Grammar)": "../CS/Essentials%20of%20Grammar.pdf",
        "Unit 5 (Communication Through Poems and Short Stories)": "../CS/Communication%20Through%20Poems%20and%20Short%20Stories.pdf"
      }
    },
    "Managerial Economics and Financial Accounting": {
      title: "Managerial Economics and Financial Accounting",
      units: {
        "Unit 1 (Introduction to Managerial Economics)": "../MEFA/Introduction%20to%20Managerial%20Economics.pdf",
        "Unit 2 (Theory of Demand)": "../MEFA/Theory%20of%20Demand.pdf",
        "Unit 3 (Production & Cost Analyses)": "../MEFA/Production%20&%20Cost%20Analyses.pdf",
        "Unit 4 (Market Structure and Pricing Theory)": "../MEFA/Market%20Structure%20and%20Pricing%20Theory.pdf",
        "Unit 5 (Types of Business Organization & Business Cycles)": "../MEFA/Types%20of%20Business%20Organization%20&%20Business%20Cycles.pdf",
        "Unit 6 (Financial Accounting and Ratio Analysis)": "../MEFA/Financial%20Accounting%20and%20Ratio%20Analysis.pdf"
      }
    },
    "Introduction to Built Environment": {
      title: "Introduction to Built Environment",
      units: {
        "Unit 1 (Built Environment & Elements of Built Environment)": "../IBE/Built%20Environment%20&%20Elements%20of%20Built%20Environment.pdf",
        "Unit 2 (Modern World Approaches Towards Built Environment)": "../IBE/Modern%20World%20Approaches%20Towards%20Built%20Environment.pdf",
        "Unit 3 (Role of Civil Engineering in Built Environment)": "../IBE/Role%20of%20Civil%20Engineering%20in%20Built%20Environment.pdf",
        "Unit 4 (Historical Architecture and Modern Structural Design & Construction)": "../IBE/Historical%20Architecture%20and%20Modern%20Structural%20Design%20&%20Construction.pdf",
        "Unit 5 (Building Physics, Ergonomics, and Comfort)": "../IBE/Building%20Physics,%20Ergonomics,%20and%20Comfort.pdf"
      }
    },
    "Basic Electrical Engineering": {
      title: "Basic Electrical Engineering",
      units: {
         "Unit 1 (Introduction)": "../BEE/Introduction.pdf",
         "Unit 2 (DC Circuits)": "../BEE/DC%20Circuits.pdf",
         "Unit 3 (AC Circuits)": "../BEE/AC%20Circuits.pdf",
         "Unit 4 (Transformer and DC Machines)": "../BEE/Transformer%20and%20DC%20Machines.pdf",
         "Unit 5 (Basic Electronic Devices & Thyristors)": "../BEE/Basic%20Electronic%20Devices%20%26%20Thyristors.pdf",
         "Unit 6 (Communication System)": "../BEE/Communication%20System.pdf"
      }
    },
    "Computer Fundamentals & Programming": {
      title: "Computer Fundamentals & Programming",
      units: {
        "Unit 1 (Fundamentals Of Computer & Number Systems)": "../CFP/Fundamentals%20Of%20Computer%20&%20Number%20Systems.pdf",
        "Unit 2 (C Language)": "../CFP/C%20Language.pdf",
        "Unit 3 (Control Statements and Loop In C)": "../CFP/Control%20Statements%20and%20Loop%20In%20C.pdf",
        "Unit 5 (Functions In C)": "../CFP/Functions%20In%20C.pdf",
        "Unit 4 (Arrays, Pointers & Structures in C)": "../CFP/Arrays%2C%20Pointers%20&%20Structures%20in%20C.pdf",
        "Unit 6 (Strings & Input or Output In C)": "../CFP/Strings%20&%20Input%20or%20Output%20In%20C.pdf"
      }
    },
    "Elements of Mechanical Engineering": {
      title: "Elements of Mechanical Engineering",
      units: {
        "Unit 1 (Thermodynamics & Second Law of Thermodynamics)": "../EME/Thermodynamics%20&%20Second%20Law%20of%20Thermodynamics.pdf",
        "Unit 2 (Vapour Power Cycles & Refrigeration and Air Conditioning)": "../EME/Vapour%20Power%20Cycles%20&%20Refrigeration%20and%20Air%20Conditioning.pdf",
        "Unit 3 (Gas Power Cycles & Internal Combustion Engines)": "../EME/Gas%20Power%20Cycles%20&%20Internal%20Combustion%20Engines.pdf",
        "Unit 4 (Materials and Manufacturing Processes)": "../EME/Materials%20And%20Manufacturing%20Processes.pdf",
        "Unit 5 (Power Transmission)": "../EME/Power%20Transmission.pdf"
      }
    }
  }
};

// ✅ Load semester options on page load
window.onload = () => {
  for (let sem in notesData) {
    const opt = document.createElement("option");
    opt.value = sem;
    opt.textContent = sem;
    semesterSelect.appendChild(opt);
  }

  showAllNotes(); // Initial load: show all
};

// ✅ Show all units of all subjects of all semesters
function showAllNotes() {
  notesContainer.innerHTML = "";
  for (let sem in notesData) {
    for (let subject in notesData[sem]) {
      const note = notesData[sem][subject];
      for (let unit in note.units) {
        notesContainer.innerHTML += createUnitCard(unit, note.title, note.units[unit]);
      }
    }
  }
  observeCards();
}

// ✅ Card template
function createUnitCard(unit, title, file) {
  return `
    <div class="col-md-6 col-lg-5">
      <div class="card p-3 shadow-sm h-100">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title mb-1">${unit}</h5>
            <p class="text-muted small mb-0">${title}</p>
          </div>
          <a href="viewer.html?file=${encodeURIComponent(file)}" class="custom-btn" target="_blank">
            <i class="bi bi-eye"></i> View
          </a>
        </div>
      </div>
    </div>
  `;
}

// ✅ On semester select → show all units of subjects in selected semester
semesterSelect.addEventListener("change", () => {
  const sem = semesterSelect.value;

  // Enable and populate subject dropdown
  subjectSelect.innerHTML = `<option selected disabled>Select Subject</option>`;
  subjectSelect.disabled = false;
  subjectSelect.classList.add("enabled");

  for (let subject in notesData[sem]) {
    const opt = document.createElement("option");
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  }

  // Show all units of all subjects in selected semester
  notesContainer.innerHTML = "";
  for (let subject in notesData[sem]) {
    const note = notesData[sem][subject];
    for (let unit in note.units) {
      notesContainer.innerHTML += createUnitCard(unit, note.title, note.units[unit]);
    }
  }

  observeCards();
});

// ✅ On subject select → show only that subject's 5 unit cards
subjectSelect.addEventListener("change", () => {
  const sem = semesterSelect.value;
  const subject = subjectSelect.value;
  const note = notesData[sem][subject];

  notesContainer.innerHTML = "";

  for (let unit in note.units) {
    notesContainer.innerHTML += createUnitCard(unit, note.title, note.units[unit]);
  }

  observeCards();
});

// ✅ Scroll-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll(".card").forEach(card => observer.observe(card));
}

