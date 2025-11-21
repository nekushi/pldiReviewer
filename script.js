const divFirstPage = document.querySelector(".first-page");
const divSecondPage = document.querySelector(".second-page");
const divEnumPage = document.querySelector(".enum-page");
const divQuizArea = document.querySelector(".quiz-area");
const divResultArea = document.querySelector(".result-area");

const questionArea = document.querySelector("h1 + p");
const label = document.querySelector("label");
const input = document.querySelector("input");
const span = document.querySelector(".p-correct-answer");
// const scoreboard = document.querySelector('.new-scoreboard')

const btnGetStarted = document.querySelector(".get-started");
const btnStart = document.querySelector(".start");
const btnStartQuiz = document.querySelector(".start-quiz");
const showAns = document.querySelector(".show-answer");
const restart = document.querySelector(".restart");

const correctScore = document.querySelector(".correct > span");
const incorrectScore = document.querySelector(".incorrect > span");
const percentage = document.querySelector(".percentage > span");
const remarks = document.querySelector(".remarks > span");

const resultCorrectScore = document.querySelector(".result-correct > span");
const resultIncorrectScore = document.querySelector(".result-incorrect > span");

const questions = [
  {
    question: "consists of a cycle of CPU execution and I/O wait",
    answer: "Process execution",
  },
  {
    question: "one of the primary computer resources",
    answer: "CPU",
  },
  {
    question: "program typically has many short CPU bursts",
    answer: "I/O bound",
  },
  {
    question: "program might have a few long CPU bursts",
    answer: "CPU bound",
  },
  {
    question: "can be designed as either non-preemptive or preemptive",
    answer: "Operating System kernels",
  },
  {
    question:
      "will wait for a system call to complete or for a process to block",
    answer: "Non preemptive kernel",
  },
  {
    question:
      "requires mechanisms such as mutex locks to prevent race conditions",
    answer: "Preemptive kernel",
  },
  {
    question:
      "module gives control of the CPU to the process selected by the scheduler",
    answer: "Dispatcher",
  },
  {
    question: "invoked during every context switch",
    answer: "Dispatcher",
  },
  {
    question:
      "time it takes for the dispatcher to stop one process and resume another running",
    answer: "Dispatch latency",
  },
  {
    question: "keep the CPU as busy as possible",
    answer: "CPU utilization",
  },
  {
    question:
      "numbebr of processes that complete their execution per time unit",
    answer: "Throughput",
  },
  {
    question: "amount of time to execute a particular process",
    answer: "Turnaround time",
  },
  {
    question: "amount of time a process has been waiting in the ready queue",
    answer: "Waiting time",
  },
  {
    question: "amount of time it takes from when a request was submitted",
    answer: "Response time",
  },
  {
    question: "short process behind long process",
    answer: "Convoy effect",
  },
  {
    question: "associate with each process the length of its next CPU burst",
    answer: "Shortest Job First (SJF) Scheduling",
  },
  {
    question: "gives minimum average waiting time for a given set of processes",
    answer: "Shortest Job First (SJF) Scheduling",
  },
  {
    question: "will preempt the currently executing process",
    answer: "preemptive SJF algorithm",
  },
  {
    question:
      "will allow the currently running process to finish its CPU burst",
    answer: "non preemptive SJF algorithm",
  },
  {
    question: "preemptive SJF scheduling is sometimes called:",
    answer: "Shortest Remaining Time First",
  },
  {
    question:
      "each process gets a small unit of CPU time (time quantum q) or (time slice), usually 10-100 milliseconds",
    answer: "Round Robin (RR)",
  },
  {
    question: "interrupts every quantum to schedule next process",
    answer: "Timer",
  },
  {
    question: "low priority processes may never execute",
    answer: "Starvation (indefinite blocking)",
  },
  {
    question: "as time progresses increase the priority of the process",
    answer: "Aging",
  },
  {
    question:
      "the computer inside the Engine Control Unit in a car has to manage the engine at every moment",
    answer: "Real Time Processes",
  },
  {
    question: "allows a process to move between the various queues",
    answer: "Multilevel Feedback Queue Scheduling",
  },
  {
    question:
      "schedules user-level threads to run an available Lightweight Process (LWP)",
    answer: "Thread library",
  },
  {
    question:
      "in which competition for the CPU takes place among threads belonging to the same process",
    answer: "Process Contention Scope (PCS)",
  },
  {
    question:
      "kernel uses _____, in which competition for the CPU with SCS scheduling takes place among all threads in the system",
    answer: "System Contention Scope (SCS)",
  },
  {
    question: "selects the runnable thread with the highest priority to run",
    answer: "Thread scheduler",
  },
  {
    question: "referred to systems that provided multiple physical processors",
    answer: "Multiprocessor",
  },
  {
    question: "strategies for organizing the threads eligible to be scheduled",
    answer: "Symmetric Multiprocessing (SMP)",
  },
  {
    question:
      "allowed several processes to run in parallel by providing multiple physical processors",
    answer: "SMP systems",
  },
  {
    question:
      "to have all scheduling decisions, I/O processing, and other system activities handled by a single processor",
    answer: "Asymmetric Multiprocessing",
  },
  {
    question: "multithreaded Multicore System also called:",
    answer: "Chip multithreading (CMT)",
  },
  {
    question: "assigns each core multiple hardware threads",
    answer: "Chip multithreading (CMT)",
  },
  {
    question: "Chip-MultiThreading (CMT) also known as:",
    answer: "Simultaneous Multithreading or SMT",
  },
  {
    question: "Intel refers to CMT as:",
    answer: "Hyper threading",
  },
  {
    question: "attempts to keep workload evenly distributed",
    answer: "Load balancing",
  },
  {
    question: "periodic task checks load on each processor",
    answer: "Push migration",
  },
  {
    question: "idle processors pulls waiting task from busy processor",
    answer: "Pull migration",
  },
  {
    question:
      "the operating system attempts to keep a thread running on the same processor",
    answer: "Soft affinity",
  },
  {
    question: "allows a process to specify a set of processors it may run on",
    answer: "Hard affinity",
  },
  {
    question:
      "two physical processor chips each with its own CPU and local memory",
    answer: "Non Uniform Memory Access (NUMA)",
  },
  {
    question: "to get a accurate evaluation of scheduling algorithms",
    answer: "Simulations",
  },
  {
    question:
      "the most common method uses a _____ that is programmed to generate ",
    answer: "Random number generator",
  },
  {
    question:
      "critical real-time tasks have the highest priority, but no guarantee as to when tasks will be scheduled",
    answer: "Soft realtime systems",
  },
  {
    question: "task must be serviced by its deadline",
    answer: "Hard realtime systems",
  },
  {
    question:
      "the amount of time that elapses from when an event occurs to when it is serviced",
    answer: "Event latency",
  },
  {
    question:
      "time from arrival of interrupt to start of routine that services interrupt",
    answer: "Interrupt latency",
  },
  {
    question:
      "time for schedule to take current process off CPU and switch to another",
    answer: "Dispatch latency",
  },
  {
    question: "priority is assigned based on the inverse of its period",
    answer: "Rate Montonic Scheduling",
  },
  {
    question: "priorities are assigned according to deadlines",
    answer: "Earliest Deadline First Scheduling",
  },
  {
    question: "interval of time during which task should run at least once",
    answer: "Target latency",
  },
  {
    question: "set of CPU cores that can be balanced against one another",
    answer: "Scheduling domain",
  },
  {
    question:
      "scheduler converts class-specific priorities into a per-thread global priority",
    answer: "Solaris Scheduling",
  },
  {
    question: "for each algorithm, calculate minimum average waiting time",
    answer: "Deterministic evaluation",
  },
  {
    question:
      "describes the arrival of processes, and CPU and I/O bursts probabilistically",
    answer: "Queueing Models",
  },
  // END of Chapter 5
  {
    question: "basic unit of CPU utilization",
    answer: "Thread",
  },
  {
    question: "has a single thread of control",
    answer: "process",
  },
  {
    question: "is heavy-weight",
    answer: "Process creation",
  },
  {
    question: "is light-weight",
    answer: "Thread creation ",
  },
  {
    question:
      "may allow continued execution if part of process is blocked, especially important for user interfaces",
    answer: "Responsiveness",
  },
  {
    question:
      "can share resources only through techniques such as shared memory and message passing.",
    answer: "Processes",
  },
  {
    question:
      "share resources of process, easier than shared memory or message passing used between processes",
    answer: "Threads",
  },
  {
    question:
      "share the memory and the resources of the process to which they belong by default",
    answer: "Threads",
  },
  {
    question: "refers to a single CPU with multiple execution units",
    answer: "Multicore",
  },
  {
    question: "refers to a system that has two or more CPUs",
    answer: "Multiprocessor",
  },
  {
    question: "find areas that can be divided into separate, concurrent tasks",
    answer: "Dividing activities",
  },
  {
    question: "tasks perform equal work of equal value",
    answer: "Balance",
  },
  {
    question:
      "the data accessed and manipulated by the tasks must be divided to run on separate cores",
    answer: "Data splitting",
  },
  {
    question:
      "programmers must ensure that the execution of the tasks is synchronized to accommodate the data dependency",
    answer: "Data dependency",
  },
  {
    question: "different execution paths are possible",
    answer: "Testing and debugging",
  },
  {
    question: "implies a system can perform more than one task simultaneously",
    answer: "Parallelism",
  },
  {
    question: "supports more than one task making progress",
    answer: "Concurrency",
  },
  {
    question:
      "designed to provide the illusion of parallelism by rapidly switching between processes",
    answer: "CPU schedulers",
  },
  {
    question: "distributes subsets of the same data across multiple cores",
    answer: "Data parallelism",
  },
  {
    question:
      "distributing threads across cores, each thread performing unique operation",
    answer: "Task parallelism",
  },
  {
    question: "involves the distribution of data across multiple cores",
    answer: "Data parallelism",
  },
  {
    question: "involves the distribution of tasks across multiple cores",
    answer: "Task parallelism",
  },
  {
    question:
      "identifies performance gains from adding additional cores to an application that has both serial and parallel components",
    answer: "Amdahl's Law",
  },
  {
    question: "management done by user-level threads library",
    answer: "User threads",
  },
  {
    question: "supported/managed by the Kernel",
    answer: "Kernel threads",
  },
  {
    question: "allows a user thread to be bound to kernel thread",
    answer: "Two Level Model",
  },
  {
    question: "provides programmer with API for creating and managing threads",
    answer: "Thread library",
  },
  {
    question:
      "may be provided as either a user-level or a kernel-level library",
    answer: "POSIX Pthreads",
  },
  {
    question: "a kernel-level library available on Windows systems",
    answer: "Windows Threads",
  },
  {
    question: "managed by JVM, often JVM is running on top of a host OS",
    answer: "Java Threads",
  },
  {
    question: "create a number of threads in a pool",
    answer: "Thread pools",
  },
  {
    question:
      "software interrupts sent to a program to indicate that an important event has occurred",
    answer: "Signals",
  },
  {
    question: "used to process signals",
    answer: "Signal handler",
  },
  {
    question: "Every signal has _____ that kernel runs when handling signal",
    answer: "Default handler",
  },
  {
    question: "terminating a thread before it has finished",
    answer: "Thread cancellation",
  },
  {
    question: "thread to be canceled",
    answer: "Target thread",
  },
  {
    question: "allows each thread to have its own copy of data",
    answer: "Thread Local Storage (TLS)",
  },
  {
    question: "provide upcalls",
    answer: "Scheduler activation",
  },
  {
    question:
      "communication mechanism from the kernel to the upcall handler in the thread library",
    answer: "Upcalls",
  },
  {
    question: "primary API for Windows applications",
    answer: "Windows API",
  },
  {
    question:
      "blocks removed in FIFO order, queue is per process, called main queue",
    answer: "Serial",
  },
  {
    question: "removed in FIFO order but several may be removed at a time",
    answer: "Concurrent",
  },
];

let corrects = 0;
let incorrects = 0;
let rngQuestion;
const rngQuestionLength = questions.length;

function generateQuestion() {
  rngQuestion = Math.floor(Math.random() * questions.length);
  questionArea.textContent = `${questions[rngQuestion].question}`;
}

function incrementCorrect() {
  correctScore.textContent = ++corrects;
  resultCorrectScore.textContent = corrects;
}

function incrementIncorrect() {
  incorrectScore.textContent = ++incorrects;
  resultIncorrectScore.textContent = incorrects;
}

function displayAnswer() {
  span.textContent = questions[rngQuestion].answer;
}

function resetInput() {
  input.style.color = "#ffffff";
  input.value = "";
  span.textContent = "";
}

function calculateAndDisplayResult(right, wrong) {
  percentage.textContent = `${Math.round((right / (right + wrong)) * 100)}%`;
  remarks.textContent =
    percentage.textContent >= 80
      ? "80% or above, nice."
      : "review lang GLGLGL!";
}

function showAndHideDivs(showDiv, hideDiv, type) {
  showDiv.style.display = type;
  hideDiv.style.display = "none";
}

btnGetStarted.onclick = function () {
  showAndHideDivs(divSecondPage, divFirstPage, "block");
};

btnStart.onclick = function () {
  showAndHideDivs(divEnumPage, divSecondPage, "block");
};

btnStartQuiz.onclick = function () {
  showAndHideDivs(divQuizArea, divEnumPage, "flex");
  generateQuestion();
};

showAns.onclick = function () {
  if (showAns.textContent === "Show Answer!") {
    let ans = input.value.toLowerCase().trim();
    if (ans === "") {
      incrementIncorrect();
    } else if (
      ans === questions[rngQuestion].answer.toLowerCase() ||
      questions[rngQuestion].answer.toLowerCase().match(ans)
    ) {
      input.style.color = "#66ff66";
      incrementCorrect();
    } else if (ans !== questions[rngQuestion].answer.toLowerCase()) {
      input.style.color = "#ff0000";
      incrementIncorrect();
    }
    displayAnswer();
    showAns.textContent = "Next!";

    questions.splice(rngQuestion, 1);
  } else if (showAns.textContent === "Next!") {
    resetInput();
    generateQuestion();

    showAns.textContent = "Show Answer!";
  } else if (showAns.textContent === "Show Result!") {
    showAndHideDivs(divResultArea, divQuizArea, "flex");
    calculateAndDisplayResult(corrects, incorrects);
  }

  if (
    parseInt(correctScore.textContent) +
      parseInt(incorrectScore.textContent) ===
    rngQuestionLength
  ) {
    showAns.textContent = "Show Result!";
  }
};

restart.onclick = function () {
  location.reload();
};

// console.log(questions.length);
