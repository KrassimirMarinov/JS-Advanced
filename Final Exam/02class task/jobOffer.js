class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    const addedCandidates = [];
    for (const candidateInfo of candidates) {
      const [name, education, yearsExperience] = candidateInfo.split("-");
      const existingCandidate = this.jobCandidates.find((candidate) => {
        return candidate.name === name;
      });
      if (existingCandidate) {
        if (Number(yearsExperience) > existingCandidate.yearsExperience) {
          existingCandidate.yearsExperience = Number(yearsExperience);
        }
      } else {
        this.jobCandidates.push({
          name,
          education,
          yearsExperience: Number(yearsExperience),
        });
        addedCandidates.push(name);
      }
    }
    return `You successfully added candidates: ${addedCandidates.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    const [name, minimalExperience] = chosenPerson.split("-");
    let candidate;

    for (const c of this.jobCandidates) {
      if (c.name === name) {
        candidate = c;
        break;
      }
    }
    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (candidate.yearsExperience < Number(minimalExperience)) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }
    candidate.yearsExperience = "hired";
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const candidate = this.jobCandidates.find(
      (candidate) => candidate.name === name
    );
    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    let salary;
    if (candidate.education === "Bachelor") {
      salary = "$50,000";
    } else if (candidate.education === "Master") {
      salary = "$60,000";
    } else {
      salary = "$40,000";
    }
    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error("Candidate Database is empty!");
    }
    const sortedCandidates = this.jobCandidates
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((candidate) => `${candidate.name}-${candidate.yearsExperience}`);
    return `Candidates list:\n${sortedCandidates.join("\n")}`;
  }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("John Jones-8"));
