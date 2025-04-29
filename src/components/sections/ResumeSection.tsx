// src/components/ResumeSection.tsx

// resume section component
export function ResumeSection() {
    return (
      <div className="text-[var(--color-text)]">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Summary</h3>
          <p className="mb-4">
            Software engineer with experience in full-stack development, data engineering, and statistical modeling. 
            Proficient in Python, Javascript, Swift, and SQL, with hands-on experience across various libraries and frameworks. 
            Strong foundations in data pipelines, visualization, machine learning, and reporting. 
            Adept at solving technical problems, collaborating cross-functionally, and transforming raw data into 
            insights that drive innovation and decision-making.
          </p>
        </div>
  
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Technical Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Languages, Tools, Libraries:</strong> Python (Django, pandas, NumPy, scikit-learn, PyTorch, TensorFlow, 
              matplotlib, seaborn), C, JavaScript (Node.js, React), and Swift
            </li>
            <li>
              <strong>Database Technologies:</strong> SQL (SQLite, PostgreSQL), Firebase/Firestore, Django ORM
            </li>
            <li>
              <strong>Other Skills:</strong> Git, REST APIs, macOS, Linux, Windows
            </li>
          </ul>
        </div>
  
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Work Experience</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">Outlier.ai</h4>
              <span className="text-sm text-[var(--color-muted)]">Remote | June 2024 - Present</span>
            </div>
            <h5 className="text-lg font-medium mb-2">AI Code Evaluator</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluated and quality-tested AI-generated code across numerous languages to enhance logical reasoning</li>
              <li>Designed contextual frameworks to challenge AI coding capabilities across various scenarios</li>
              <li>Curated and annotated high-quality datasets focused on clean, optimal solutions</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">The Pennsylvania State University</h4>
              <span className="text-sm text-[var(--color-muted)]">August 2024 - December 2024</span>
            </div>
            <h5 className="text-lg font-medium mb-2">Learning Assistant for CMPSC 475 (Applications Programming)</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mentored students in iOS/mobile application development using Swift and SwiftUI</li>
              <li>Reviewed and debugged student code, enhancing their understanding of application programming concepts</li>
              <li>Collaborated with faculty to tailor instruction based on student progress and technical challenges</li>
            </ul>
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Projects</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">InStock</h4>
              <span className="text-sm text-[var(--color-muted)]">December 2024 - present</span>
            </div>
            <h5 className="text-lg font-medium italic mb-2">Python, Django, PostgreSQL, React, Selenium</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed a price tracking system to monitor product pricing and availability with web scrapers across major e-commerce platforms (Amazon, Target, etc.)</li>
              <li>Engineered a microservices architecture in Django using Redis for pub/sub messaging and Celery for task scheduling</li>
              <li>Designed a fault-tolerant architecture with error recovery mechanisms, monitoring, and logging to ensure 99% system uptime for data collection</li>
              <li>Built RESTful API endpoints to support data retrieval, user authentication and preference management</li>
              <li>Integrated Discord bot functionality for real-time alerts and user interaction</li>
            </ul>
          </div>
        </div>
  
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Education</h3>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-[var(--color-primary)]">The Pennsylvania State University, University Park, PA</h4>
            <h5 className="text-lg font-medium mb-1">Bachelor of Engineering in Computer Science</h5>
            <p>Graduated December 2024</p>
          </div>
        </div>
      </div>
    );
  }