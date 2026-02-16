    (function() {
        // ---------- جميع الأسئلة 100 من ملف PDF بالضبط (معاد صياغتها للعرض) ----------
        const questions = [
            // 1-10
            { q: "What is an operating system primarily defined as?",
              opts: ["A. A program that acts as an intermediary between a user and computer hardware", "B. A type of application software like a word processor", "C. The physical components of a computer", "D. A programming language for system development"],
              correct: 0, note: "الـ OS هو وسيط بين المستخدم والعتاد." },
            { q: "What is the smallest convenient chunk of storage that most computers can move with a single instruction?",
              opts: ["A. Bit", "B. Byte", "C. Word", "D. Kilobyte"],
              correct: 1, note: "البايت (Byte) هو أصغر وحدة تخزين يمكن نقلها بتعليمة واحدة." },
            { q: "Where is the bootstrap program typically stored?",
              opts: ["A. Hard disk", "B. RAM", "C. ROM or EPROM (firmware)", "D. Cache"],
              correct: 2, note: "الـ bootstrap موجود في الذاكرة الدائمة ROM." },
            { q: "What is the main purpose of caching in a computer system?",
              opts: ["A. To permanently save data", "B. To copy information into faster storage temporarily for quick access", "C. To increase the size of main memory", "D. To replace secondary storage"],
              correct: 1, note: "الكاش (cache) يخزن البيانات مؤقتاً للوصول السريع." },
            { q: "In asymmetric multiprocessing, how are processors assigned?",
              opts: ["A. Each processor is assigned a specific task", "B. Each processor performs all tasks", "C. Processors are not used simultaneously", "D. Processors only handle I/O operations"],
              correct: 0, note: "في asymmetric multiprocessing كل معالج مخصص لمهمة محددة." },
            { q: "What is a key feature of clustered systems?",
              opts: ["A. They use a single general-purpose processor", "B. They provide high availability and often share storage via a SAN", "C. They do not allow multiple applications to run"],
              correct: 1, note: "الأنظمة المجمعة (clustered) توفر توفر عالي ومشاركة تخزين." },
            { q: "What is the main goal of multiprogramming?",
              opts: ["A. To allow only one user at a time", "B. To keep the CPU busy by switching between multiple jobs", "C. To increase the cost of system resources", "D. To prevent any I/O operations"],
              correct: 1, note: "multiprogramming تزيد استغلال CPU عبر التبديل بين الوظائف." },
            { q: "What hardware feature helps the OS protect itself by distinguishing between user code and kernel code?",
              opts: ["A. Cache memory", "B. Solid-state drive", "C. Mode bit", "D. Device driver"],
              correct: 2, note: "Mode bit يفرق بين وضع المستخدم ووضع kernel." },
            { q: "In process management, what is a process considered?",
              opts: ["A. A passive entity", "B. An active entity (a program in execution)", "C. A storage unit", "D. A type of hardware component"],
              correct: 1, note: "العملية (process) هي برنامج قيد التنفيذ (active)." },
            { q: "What does memory management determine?",
              opts: ["A. The speed of the CPU", "B. What data and instructions are in memory and when", "C. The price of the computer system", "D. The user interface design"],
              correct: 1, note: "إدارة الذاكرة تقرر أي البيانات والتعليمات في الذاكرة ومتى." },
            // 11-20
            { q: "Which of the following is not a primary service provided by an operating system to users?",
              opts: ["A. Program execution", "B. I/O operations", "C. Hardware manufacturing", "D. User interface"],
              correct: 2, note: "الـ OS لا يصنع العتاد، بل يديره." },
            { q: "What are the two main types of user interfaces provided by operating systems?",
              opts: ["A. CLI and GUI", "B. API and GUI", "C. CLI and API", "D. Kernel and Shell"],
              correct: 0, note: "واجهات المستخدم: CLI (سطر الأوامر) و GUI (رسومية)." },
            { q: "What is a system call?",
              opts: ["A. A command entered in the CLI", "B. A type of application program", "C. A programming interface to OS services", "D. A hardware component"],
              correct: 2, note: "system call هي واجهة برمجية لخدمات النظام." },
            { q: "Which method is commonly used to pass parameters to the OS during a system call?",
              opts: ["A. Using global variables only", "B. Passing parameters in registers, block in memory, or stack", "C. Passing via network packets", "D. Using only the command line"],
              correct: 1, note: "تمرر parameters عبر registers أو block في الذاكرة أو stack." },
            { q: "Which category of system calls is used for creating and deleting files?",
              opts: ["A. Process control", "B. File management", "C. Device management", "D. Communications"],
              correct: 1, note: "إدارة الملفات: create, delete, open, close." },
            { q: "What is the main purpose of system programs?",
              opts: ["A. To replace the kernel", "B. To provide a convenient environment for program development and execution", "C. To manage hardware directly", "D. To prevent user errors"],
              correct: 1, note: "system programs توفر بيئة تطوير وتنفيذ مريحة." },
            { q: "Which operating system design principle separates what will be done (policy) from how it is done (mechanism)?",
              opts: ["A. Layering", "B. Separation of policy and mechanism", "C. Microkernel design", "D. Monolithic design"],
              correct: 1, note: "فصل السياسة عن الآلية يزيد المرونة." },
            { q: "Which OS structure moves most functionality from the kernel into user space and uses message passing for communication?",
              opts: ["A. Layered approach", "B. Microkernel"],
              correct: 1, note: "microkernel ينقل معظم الخدمات لمساحة المستخدم." },
            { q: "What is the purpose of the SYSGEN program?",
              opts: ["A. To boot the system", "B. To configure the OS for specific hardware", "C. To compile user applications", "D. To manage system calls"],
              correct: 1, note: "SYSGEN يضبط النظام حسب العتاد الموجود." },
            { q: "Where is the bootstrap loader typically stored?",
              opts: ["A. In the hard disk", "B. In RAM", "C. In ROM or EEPROM", "D. In cache memory"],
              correct: 2, note: "bootstrap loader في ROM." },
            // 21-30
            { q: "What is a process in operating system terms?",
              opts: ["A. A passive program stored on disk", "B. An active program in execution", "C. A hardware component", "D. A type of system call"],
              correct: 1, note: "process هو برنامج active." },
            { q: "Which section of a process contains dynamically allocated memory during runtime?",
              opts: ["A. Text section", "B. Stack", "C. Data section", "D. Heap"],
              correct: 3, note: "Heap للذاكرة الديناميكية." },
            { q: "What is the state of a process that is waiting for some event to occur (like I/O completion)?",
              opts: ["A. New", "B. Running", "C. Waiting", "D. Ready"],
              correct: 2, note: "waiting تعني ينتظر حدث (مثل I/O)." },
            { q: "Where is all the information about a process stored, including its state, program counter, and CPU registers?",
              opts: ["A. In the heap", "B. In the Process Control Block (PCB)", "C. In the text section"],
              correct: 1, note: "PCB يخزن كل بيانات العملية." },
            { q: "Which scheduler selects which process should be executed next and allocates the CPU?",
              opts: ["A. Long-term scheduler", "B. Short-term scheduler (CPU scheduler)", "C. Medium-term scheduler", "D. Job scheduler"],
              correct: 1, note: "short-term scheduler يختار العملية التالية." },
            { q: "What is the main purpose of context switching?",
              opts: ["A. To create new processes", "B. To save the state of the old process and load the new process's state", "C. To terminate processes", "D. To allocate memory to processes"],
              correct: 1, note: "context switching يحفظ حالة القديمة ويحمل الجديدة." },
            { q: "In process creation, which system call creates a new process in UNIX?",
              opts: ["A. fork()", "B. exec()", "C. wait()", "D. exit()"],
              correct: 0, note: "fork() تنشئ عملية جديدة." },
            { q: "What happens to a child process if its parent terminates without invoking wait()?",
              opts: ["A. It becomes a zombie", "B. It becomes an orphan", "C. It continues running normally", "D. It immediately terminates"],
              correct: 1, note: "تصبح orphan (يتيمة) ويتبناها init." },
            { q: "Which type of process spends more time doing I/O than computations?",
              opts: ["A. I/O-bound process", "B. CPU-bound process", "C. Medium-term process", "D. Foreground process"],
              correct: 0, note: "I/O-bound تقضي وقتاً في الإدخال/الإخراج." },
            { q: "In the Chrome browser architecture, which process is responsible for rendering web pages?",
              opts: ["A. Browser process", "B. Renderer process", "C. Plug-in process", "D. Kernel process"],
              correct: 1, note: "Renderer process مسؤول عن عرض الصفحات." },
            // 31-40
            { q: "What is a thread in an operating system?",
              opts: ["A. A complete program in execution", "B. A type of process control block", "C. A fundamental unit of CPU utilization within a process", "D. A hardware component"],
              correct: 2, note: "الـ thread هو وحدة أساسية لاستخدام CPU داخل العملية." },
            { q: "Which of the following is not a benefit of multithreading?",
              opts: ["A. Responsiveness", "B. Resource sharing", "C. Increased security", "D. Economy (lower overhead than processes)"],
              correct: 2, note: "زيادة الأمان ليست من فوائد الـ multithreading." },
            { q: "What is the term for distributing subsets of the same data across multiple cores to perform the same operation?",
              opts: ["A. Data parallelism", "B. Task parallelism", "C. Concurrent execution", "D. Thread binding"],
              correct: 0, note: "data parallelism: تقسيم البيانات وتنفيذ نفس العملية." },
            { q: "Which multithreading model maps many user-level threads to a single kernel thread?",
              opts: ["A. Many-to-One", "B. One-to-One", "C. Many-to-Many", "D. Two-level"],
              correct: 0, note: "Many-to-One: عدة threads لمستوى المستخدم تقابل واحد Kernel." },
            { q: "In which threading model does each user-level thread map to its own kernel thread?",
              opts: ["A. Many-to-One", "B. One-to-One", "C. Many-to-Many", "D. Two-level"],
              correct: 1, note: "One-to-One: كل thread يقابله kernel thread." },
            { q: "Which thread library is a POSIX standard (IEEE 1003.1c) API for thread creation and synchronization?",
              opts: ["A. Windows threads", "B. Pthreads", "C. Java threads", "D. Kernel threads"],
              correct: 1, note: "Pthreads هو المعيار POSIX." },
            { q: "Java threads are managed by:",
              opts: ["A. The operating system kernel directly", "B. The Java Virtual Machine (JVM)", "C. The Windows Thread API", "D. The Pthreads library"],
              correct: 1, note: "JVM تدير threads في Java." },
            { q: "Which type of parallelism distributes different tasks (threads) across cores, each performing a unique operation?",
              opts: ["A. Data parallelism", "B. Task parallelism", "C. Hardware parallelism", "D. Concurrent parallelism"],
              correct: 1, note: "task parallelism: توزيع مهام مختلفة." },
            { q: "What is the main advantage of the One-to-One multithreading model over the Many-to-One model?",
              opts: ["A. It uses fewer system resources", "B. It is simpler to implement", "C. It provides more concurrency", "D. It prevents all threads from blocking"],
              correct: 2, note: "One-to-One يوفر درجة أعلى من concurrency." },
            { q: "Threads within the same process share:",
              opts: ["A. Registers and program counter", "B. Resources of the process (like memory)", "C. Kernel-level stack", "D. Separate address spaces"],
              correct: 1, note: "الخيوط تشارك الذاكرة والموارد." },
            // 41-50
            { q: "What is a race condition?",
              opts: ["A. When two processes share data without any conflict", "B. When multiple processes access shared data concurrently and the final result depends on the order of execution", "C. When a process runs too fast", "D. When the CPU switches between processes"],
              correct: 1, note: "race condition تنافس على الموارد." },
            { q: "What is the segment of code where a process may be changing common variables, updating tables, or writing files called?",
              opts: ["A. Entry section", "B. Critical section", "C. Remainder section", "D. Exit section"],
              correct: 1, note: "critical section مقطع حرج." },
            { q: "Which section of code does a process use to request permission to enter its critical section?",
              opts: ["A. Entry section", "B. Critical section", "C. Exit section", "D. Remainder section"],
              correct: 0, note: "entry section طلب الدخول." },
            { q: "In Peterson's solution for two processes, what does the variable turn indicate?",
              opts: ["A. Which process is currently in its remainder section", "B. Which process has the higher priority", "C. Whose turn it is to enter the critical section", "D. Which process is currently blocked"],
              correct: 2, note: "turn تشير لمن الدور." },
            { q: "What are the two standard operations that modify a semaphore?",
              opts: ["A. lock() and unlock()", "B. wait() and signal()", "C. enter() and exit()", "D. start() and stop()"],
              correct: 1, note: "wait و signal (P و V)." },
            { q: "Which type of semaphore can only have integer values between 0 and 1?",
              opts: ["A. Counting semaphore", "B. Binary semaphore", "C. Mutex lock", "D. Atomic semaphore"],
              correct: 1, note: "binary semaphore (mutex)." },
            { q: "What is the main disadvantage of using a busy-waiting approach in synchronization?",
              opts: ["A. It is too complex", "B. It requires special hardware", "C. It wastes CPU cycles while waiting", "D. It cannot be used in multiprocessor systems"],
              correct: 2, note: "busy-waiting يهدر دورات المعالج." },
            { q: "What is the purpose of using locks in the critical section problem?",
              opts: ["A. To allow multiple processes to enter the critical section simultaneously", "B. To prevent any process from entering the critical section", "C. To ensure only one process at a time can execute in its critical section", "D. To speed up process execution"],
              correct: 2, note: "الأقفال تضمن mutual exclusion." },
            { q: "In a non-preemptive kernel, when can a process be interrupted?",
              opts: ["A. At any time while running in kernel mode", "B. Only when it exits kernel mode, blocks, or voluntarily yields the CPU", "C. Only during I/O operations", "D. Never"],
              correct: 1, note: "non-preemptive kernel لا يقطع إلا إذا تنازل طواعية." },
            { q: "Which of the following synchronization tools does not require busy waiting?",
              opts: ["A. Test-and-set instruction", "B. Peterson's solution", "C. Semaphore", "D. Spinlock"],
              correct: 2, note: "semaphore يمكن أن ينام (block) بدلاً من busy wait." },
            // 51-60
            { q: "What is the main goal of CPU scheduling in an operating system?",
              opts: ["A. Reduce memory usage", "B. Maximize CPU utilization through multiprogramming", "C. Shut down the system faster", "D. Increase the number of errors"],
              correct: 1, note: "الهدف زيادة استغلال CPU." },
            { q: "Which component is responsible for transferring control of the CPU to the process chosen by the short-term scheduler?",
              opts: ["A. Long-term scheduler", "B. CPU scheduler", "C. Dispatcher", "D. System kernel"],
              correct: 2, note: "dispatcher يعطي التحكم للمختار." },
            { q: "Which scheduling criterion represents the average time a process spends in the ready queue?",
              opts: ["A. Response Time", "B. Turnaround Time", "C. Waiting Time", "D. Throughput"],
              correct: 2, note: "waiting time = وقت الانتظار في ready queue." },
            { q: "In First-Come, First-Served (FCFS) scheduling, what is the known effect when short processes wait behind a long process?",
              opts: ["A. Aging effect", "B. Scheduler effect", "C. Convoy effect", "D. Fragmentation effect"],
              correct: 2, note: "convoy effect: العمليات القصيرة تنتظر خلف الطويلة." },
            { q: "Which scheduling algorithm gives the minimum average waiting time for a given set of processes?",
              opts: ["A. First-Come, First-Served (FCFS)", "B. Shortest-Job-First (SJF)", "C. Priority", "D. Round Robin (RR)"],
              correct: 1, note: "SJF يعطي أقل متوسط انتظار." },
            { q: "What is the proposed solution for the 'starvation' problem in priority scheduling?",
              opts: ["A. Increase the time quantum", "B. Aging - increase the priority of processes over time", "C. Use a single queue scheduler only", "D. Disable preemption"],
              correct: 1, note: "Aging ترفع الأولوية بمرور الوقت." },
            { q: "In Round Robin (RR) scheduling, what happens to a process after its 'time quantum' expires?",
              opts: ["A. The process terminates", "B. The process moves to the waiting state", "C. It is preempted and added to the end of the ready queue", "D. It receives a doubled time quantum"],
              correct: 2, note: "ينتقل إلى نهاية ready queue." },
            { q: "When is scheduling said to be 'nonpreemptive'?",
              opts: ["A. When a process can be stopped at any time", "B. When a process releases the CPU voluntarily only (by finishing or waiting)", "C. When priority is fixed and does not change", "D. When the Round Robin (RR) algorithm is used"],
              correct: 1, note: "nonpreemptive = العملية تتنازل طواعية." },
            { q: "In Multilevel Queue scheduling, how is the ready queue organized?",
              opts: ["A. Into separate queues based on process type (e.g., foreground and background)", "B. Into queues based only on process size", "C. Into one large queue for all processes", "D. Into queues based only on user identity"],
              correct: 0, note: "طوابير متعددة حسب النوع." },
            { q: "What characterizes Multilevel Feedback Queue scheduling?",
              opts: ["A. It does not allow processes to move between queues", "B. It allows processes to move between different queues based on their behavior", "C. It uses only one scheduling algorithm for all queues", "D. It completely excludes batch processes"],
              correct: 1, note: "الانتقال بين الطوابير حسب السلوك." },
            // 61-70
            { q: "Which of the following is NOT one of the four necessary conditions for deadlock?",
              opts: ["A. Mutual exclusion", "B. Hold and wait", "C. Resource sharing", "D. Circular wait"],
              correct: 2, note: "sharing ليس شرطاً; المطلوب: mutual exclusion, hold&wait, no preemption, circular wait." },
            { q: "What does a dashed line from process Pi to resource Rj represent in a resource-allocation graph?",
              opts: ["A. An assignment edge", "B. A request edge", "C. A claim edge", "D. A release edge"],
              correct: 2, note: "claim edge (مستقبلي)." },
            { q: "If a resource-allocation graph contains a cycle and there is only one instance per resource type, what can be concluded?",
              opts: ["A. There is no deadlock", "B. There is definitely a deadlock", "C. The system is in a safe state", "D. The system will soon crash"],
              correct: 1, note: "إذا كان cycle ومورد واحد => deadlock." },
            { q: "Which deadlock handling method is used by most operating systems, including UNIX?",
              opts: ["A. Deadlock prevention", "B. Deadlock avoidance", "C. Deadlock detection and recovery", "D. Ignore the problem"],
              correct: 3, note: "معظم الأنظمة تتجاهل المشكلة (Ostrich algorithm)." },
            { q: "What is the main purpose of the Banker's Algorithm?",
              opts: ["A. To prevent deadlocks", "B. To detect deadlocks", "C. To avoid deadlocks", "D. To recover from deadlocks"],
              correct: 2, note: "Banker's Algorithm يتجنب deadlock." },
            { q: "In the Banker's Algorithm, what does the 'Need' matrix represent?",
              opts: ["A. Resources currently allocated to processes", "B. Resources available in the system", "C. Maximum resources that may be requested by processes", "D. Resources that processes may still request to complete their task"],
              correct: 3, note: "Need = Max - Allocation." },
            { q: "What does the Safety Algorithm in the Banker's method determine?",
              opts: ["A. Whether the system is currently deadlocked", "B. Whether the system can allocate resources without entering an unsafe state", "C. How to recover from deadlock"],
              correct: 1, note: "Safety algorithm يتحقق من وجود safe sequence." },
            { q: "For systems with a single instance of each resource type, which graph is used for deadlock detection?",
              opts: ["A. Resource-allocation graph", "B. Wait-for graph", "C. Claim graph", "D. Cycle graph"],
              correct: 1, note: "wait-for graph يبين من ينتظر من." },
            { q: "Which recovery method involves terminating deadlocked processes one at a time until the deadlock is broken?",
              opts: ["A. Process termination", "B. Resource preemption", "C. Priority inversion", "D. Aging"],
              correct: 0, note: "process termination بإنهاء عملية تلو الأخرى." },
            { q: "When using resource preemption for deadlock recovery, what is the main risk when selecting the same process repeatedly as the victim?",
              opts: ["A. Memory fragmentation", "B. Overhead", "C. Starvation", "D. System crash"],
              correct: 2, note: "starvation إذا تكرر اختيار نفس العملية." },
            // 71-80
            { q: "What is the main hardware device responsible for mapping virtual addresses to physical addresses at runtime?",
              opts: ["A. CPU", "B. ALU", "C. Memory-Management Unit (MMU)", "D. Cache Controller"],
              correct: 2, note: "MMU يترجم العناوين." },
            { q: "Which pair of registers defines the logical address space and provides hardware protection for memory access?",
              opts: ["A. Stack and Base registers", "B. Data and Code registers", "C. Base and Limit registers", "D. Index and Segment registers"],
              correct: 2, note: "Base and Limit تحدد النطاق المسموح." },
            { q: "In the context of address binding, when are logical (virtual) addresses and physical addresses different?",
              opts: ["A. Compile-time binding", "B. Load-time binding", "C. Execution-time binding", "D. They are always the same"],
              correct: 2, note: "execution-time binding يسمح بالترحيل." },
            { q: "What is the name for temporarily moving a process out of main memory to a backing store to free up space?",
              opts: ["A. Paging", "B. Segmentation", "C. Swapping", "D. Caching"],
              correct: 2, note: "swapping نقل خارجي." },
            { q: "Which dynamic storage-allocation method allocates the first hole that is large enough for a process?",
              opts: ["A. Best-fit", "B. Worst-fit", "C. First-fit", "D. Next-fit"],
              correct: 2, note: "first-fit أول hole مناسب." },
            { q: "What type of fragmentation occurs when free memory is broken into small, non-contiguous blocks?",
              opts: ["A. Internal Fragmentation", "B. Page Fragmentation", "C. External Fragmentation", "D. Segment Fragmentation"],
              correct: 2, note: "external fragmentation خارجية." },
            { q: "In a paging system, what is the fixed-sized block of physical memory called?",
              opts: ["A. Page", "B. Segment", "C. Frame", "D. Slot"],
              correct: 2, note: "frame إطار في الذاكرة الفعلية." },
            { q: "Which memory management scheme divides logical memory into blocks of varying sizes, based on program segments like code or data?",
              opts: ["A. Paging", "B. Contiguous Allocation", "C. Segmentation", "D. Swapping"],
              correct: 2, note: "segmentation تقسيم حسب المنطق." },
            { q: "In paging, what is the part of the logical address that specifies the exact location within a page?",
              opts: ["A. Page number", "B. Frame number", "C. Page offset", "D. Segment offset"],
              correct: 2, note: "offset داخل الصفحة." },
            { q: "Which dynamic storage-allocation method aims to minimize wasted space by allocating the smallest hole that is big enough?",
              opts: ["A. First-fit", "B. Worst-fit", "C. Best-fit", "D. Quick-fit"],
              correct: 2, note: "best-fit أصغر hole مناسب." },
            // 81-90
            { q: "What is the main secondary storage device used in modern computers for bulk storage?",
              opts: ["A. RAM", "B. Cache memory", "C. Magnetic disks", "D. Registers"],
              correct: 2, note: "magnetic disks (HDD) أو SSD." },
            { q: "What is the term for the time it takes to move the disk arm to the desired cylinder?",
              opts: ["A. Rotational latency", "B. Transfer time", "C. Seek time", "D. Access latency"],
              correct: 2, note: "seek time زمن الوصول للأسطوانة." },
            { q: "Which of the following is NOT a characteristic of Solid-State Drives (SSDs) compared to Hard Disk Drives (HDDs)?",
              opts: ["A. No moving parts", "B. Faster access time", "C. More resistant to physical shock", "D. Lower cost per gigabyte"],
              correct: 3, note: "SSD أغلى لكل جيجابايت." },
            { q: "Which disk scheduling algorithm selects the request with the minimum seek time from the current head position?",
              opts: ["A. FCFS", "B. SSTF", "C. SCAN", "D. C-SCAN"],
              correct: 1, note: "SSTF أقصر زمن بحث." },
            { q: "What is the common name for the SCAN disk scheduling algorithm?",
              opts: ["A. The shortest-path algorithm", "B. The circular algorithm", "C. The elevator algorithm", "D. The priority algorithm"],
              correct: 2, note: "elevant algorithm (يذهب للأطراف)." },
            { q: "Which disk scheduling algorithm moves the head from one end of the disk to the other, servicing requests, and then immediately returns to the beginning without servicing requests on the return trip?",
              opts: ["A. SSTF", "B. SCAN", "C. C-SCAN", "D. C-LOOK"],
              correct: 2, note: "C-SCAN circular." },
            { q: "What is the process of dividing a disk into sectors that the disk controller can read and write called?",
              opts: ["A. Partitioning", "B. Logical formatting", "C. High-level formatting", "D. Low-level (physical) formatting"],
              correct: 3, note: "low-level formatting يقسم لـ sectors." },
            { q: "Where is the bootstrap loader program typically stored?",
              opts: ["A. In the CPU cache", "B. In the boot blocks of the boot partition", "C. In the RAM", "D. In the solid-state drive only"],
              correct: 1, note: "boot blocks في boot partition." },
            { q: "Which disk scheduling algorithm services requests in the order they arrive, without any optimization?",
              opts: ["A. SSTF", "B. FCFS", "C. SCAN", "D. LOOK"],
              correct: 1, note: "FCFS أولوية الوصول." },
            { q: "What is the main goal of disk scheduling algorithms?",
              opts: ["A. To increase the disk's storage capacity", "B. To minimize seek time and maximize disk bandwidth", "C. To reduce the cost of the disk drive", "D. To make the disk compatible with all operating systems"],
              correct: 1, note: "الهدف تقليل seek time وزيادة bandwidth." },
            // 91-100
            { q: "What is stored in ROM or EPROM and loads the OS at startup?",
              opts: ["A. Kernel", "B. Shell", "C. Bootstrap program", "D. Application"],
              correct: 2, note: "bootstrap في ROM." },
            { q: "Which of these is NOT a common type of user interface?",
              opts: ["A. CLI", "B. GUI", "C. API", "D. Touchscreen"],
              correct: 2, note: "API ليس واجهة مستخدم." },
            { q: "What contains the process state, PC, registers, and memory info?",
              opts: ["A. Heap", "B. Stack", "C. Process Control Block", "D. Cache"],
              correct: 2, note: "PCB." },
            { q: "Which is a benefit of multithreading?",
              opts: ["A. Increased security", "B. Higher cost than processes", "C. Resource sharing", "D. More complex code"],
              correct: 2, note: "مشاركة الموارد." },
            { q: "The part of a program where shared data is accessed is called:",
              opts: ["A. Entry section", "B. Critical section", "C. Remainder section", "D. Exit section"],
              correct: 1, note: "critical section." },
            { q: "Which scheduling criterion measures time spent waiting in the ready queue?",
              opts: ["A. Turnaround time", "B. Response time", "C. Waiting time", "D. Throughput"],
              correct: 2, note: "waiting time." },
            { q: "Which condition is NOT required for deadlock?",
              opts: ["A. Mutual exclusion", "B. Hold and wait", "C. Preemption", "D. Circular wait"],
              correct: 2, note: "preemption ليس شرطاً; بل عدم preemption." },
            { q: "What hardware device maps virtual addresses to physical addresses?",
              opts: ["A. ALU", "B. MMU", "C. CPU", "D. TLB"],
              correct: 1, note: "MMU." },
            { q: "The main benefit of virtual memory is:",
              opts: ["A. Faster CPU speed", "B. Programs can run larger than physical memory", "C. Eliminates need for hard disks", "D. Makes RAM unnecessary"],
              correct: 1, note: "تشغيل برامج أكبر من الذاكرة الفعلية." },
            { q: "Which is a common secondary storage device?",
              opts: ["A. RAM", "B. Cache", "C. Magnetic disk", "D. Registers"],
              correct: 2, note: "magnetic disk." }
        ];

        // ضمان العدد 100 (إذا نقص نكرر آخر سؤال، لكن المصفوفة 100)
        const fullQuestions = questions.slice(0, 100); 

        const userAnswers = new Array(fullQuestions.length).fill(null);
        const container = document.getElementById('questionsContainer');
        const correctSpan = document.getElementById('correctCount');
        const wrongSpan = document.getElementById('wrongCount');
        const remainSpan = document.getElementById('remainingCount');

        function render() {
            let html = '';
            fullQuestions.forEach((q, idx) => {
                const selected = userAnswers[idx];
                let optsHtml = '';
                q.opts.forEach((opt, optIdx) => {
                    const selClass = (selected === optIdx) ? 'selected' : '';
                    optsHtml += `
                        <label class="choice-label ${selClass}" data-q="${idx}" data-opt="${optIdx}">
                            <input type="radio" name="q${idx}" value="${optIdx}" ${selected === optIdx ? 'checked' : ''}>
                            ${opt}
                        </label>
                    `;
                });
                html += `
                    <div class="os-card" id="card-${idx}">
                        <div class="question-title">${idx+1}. ${q.q}</div>
                        <div class="choices">${optsHtml}</div>
                        <div class="explain-os">📘 ${q.note}</div>
                    </div>
                `;
            });
            container.innerHTML = html;

            document.querySelectorAll('.choice-label').forEach(label => {
                label.addEventListener('click', (e) => {
                    const qIdx = parseInt(label.dataset.q);
                    const optIdx = parseInt(label.dataset.opt);
                    userAnswers[qIdx] = optIdx;
                    document.querySelectorAll(`.choice-label[data-q="${qIdx}"]`).forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                    label.querySelector('input').checked = true;
                    updateStats();
                });
            });
            updateStats();
        }

        function updateStats() {
            let correct = 0, wrong = 0;
            fullQuestions.forEach((q, idx) => {
                const ans = userAnswers[idx];
                if (ans === null) return;
                ans === q.correct ? correct++ : wrong++;
            });
            const rem = fullQuestions.length - (correct + wrong);
            correctSpan.innerText = correct;
            wrongSpan.innerText = wrong;
            remainSpan.innerText = rem;
        }

        function evaluate() {
            let correct = 0, wrong = 0;
            fullQuestions.forEach((q, idx) => {
                const ans = userAnswers[idx];
                const card = document.getElementById(`card-${idx}`);
                if (!card) return;
                card.classList.remove('correct', 'wrong');
                if (ans === null) return;
                if (ans === q.correct) {
                    card.classList.add('correct');
                    correct++;
                } else {
                    card.classList.add('wrong');
                    wrong++;
                }
            });
            correctSpan.innerText = correct;
            wrongSpan.innerText = wrong;
            remainSpan.innerText = fullQuestions.length - (correct + wrong);
        }

        function resetTest() {
            for (let i = 0; i < userAnswers.length; i++) userAnswers[i] = null;
            render();
        }

        document.getElementById('gradeBtn').addEventListener('click', evaluate);
        document.getElementById('resetBtn').addEventListener('click', resetTest);

        render();
    })();
