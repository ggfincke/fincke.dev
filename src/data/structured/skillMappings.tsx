// src/data/structured/skillMappings.tsx
// skill-to-technology mappings for project filtering

// skill mappings for project filtering - only exact matches or very specific relationships
export const skillMappings: Record<string, string[]> = {
  // Languages - only match exact language usage
  'python': ['python'],
  'swift': ['swift'],
  'c': ['c'],
  'javascript': ['javascript'],
  'javascript (es6+)': ['javascript'],
  'typescript': ['typescript'],
  'java': ['java'],
  'sql': ['sql', 'sqlite', 'postgresql'],
  'solidity': ['solidity'],
  'verilog': ['verilog'],
  
  // Frontend frameworks - match framework and base language
  'react': ['react'],
  'next.js': ['next.js'],
  'tailwind css': ['tailwind css'],
  'html5': ['html', 'html5'],
  'css3': ['css', 'css3', 'tailwind css'],
  'swiftui': ['swiftui'],
  'uikit': ['uikit'],
  
  // Backend frameworks - only match the framework itself
  'node.js': ['node.js'],
  'django': ['django'],
  'fastapi': ['fastapi'],
  'celery': ['celery'],
  'rest apis': ['rest apis'],
  'spring boot': ['spring boot'],
  
  // Databases - exact matches
  'postgresql': ['postgresql'],
  'sqlite': ['sqlite'],
  'supabase': ['supabase'],
  'firebase': ['firebase'],
  'redis': ['redis'],
  
  // Mobile platforms
  'ios': ['ios'],
  'watchos': ['watchos'],
  'healthkit': ['healthkit'],
  'watchkit': ['watchkit'],
  'watchconnectivity': ['watchconnectivity'],
  'mapkit': ['mapkit'],
  'core data': ['core data'],
  'swift charts': ['swift charts'],
  
  // AI/ML libraries - exact matches only
  'pytorch': ['pytorch'],
  'tensorflow': ['tensorflow'],
  'keras': ['keras'],
  'scikit-learn': ['scikit-learn'],
  'huggingface': ['huggingface', 'transformers'],
  'hugging face transformers': ['huggingface', 'transformers'],
  'openai': ['openai'],
  'openai api': ['openai'],
  'anthropic claude': ['anthropic claude'],
  'anthropic claude api': ['anthropic claude'],
  'ollama': ['ollama'],
  'pandas': ['pandas'],
  'numpy': ['numpy'],
  'matplotlib': ['matplotlib'],
  'seaborn': ['seaborn'],
  'jupyter': ['jupyter'],
  'deep learning': ['deep learning'],
  'cnns': ['cnn'],
  'resnet': ['resnet'],
  'densenet': ['densenet'],
  'random fourier features': ['random fourier features'],
  
  // DevOps & Tools
  'github actions': ['github actions'],
  'ci/cd (github actions)': ['github actions', 'ci/cd'],
  'docker': ['docker'],
  'microservices': ['microservices'],
  'vs code': ['vs code'],
  'xcode': ['xcode'],
  'figma': ['figma'],
  'latex': ['latex'],
  'git': ['git'],
  'git hooks': ['git hooks'],
  'lighthouse ci': ['lighthouse ci'],
  
  // Web3 & Blockchain
  'web3.js': ['web3.js'],
  'metamask': ['metamask'],
  'blockchain development': ['solidity', 'ethereum', 'web3.js'],
  'ethereum': ['ethereum'],
  
  // Systems & Architecture
  'operating systems': ['operating systems'],
  'computer architecture': ['computer architecture'],
  'storage systems': ['storage systems'],
  'memory management': ['memory management'],
  'threading': ['threading'],
  'systems programming': ['systems programming'],
  'networking': ['networking'],
  'caching': ['caching'],
  
  // Hardware
  'fpga': ['fpga'],
  'xilinx vivado': ['xilinx vivado'],
  'digital design': ['digital design'],
  
  // Specialized
  'selenium': ['selenium'],
  'web scraping (selenium, beautifulsoup)': ['selenium', 'beautifulsoup'],
  'beautifulsoup': ['beautifulsoup'],
  'typer': ['typer'],
  'cli development (typer)': ['typer', 'cli'],
  'discord.py': ['discord.py'],
  'bots (discord.py)': ['discord.py'],
  'captcha solving': ['captcha solving'],
  'data analysis': ['data analysis'],
  'cli': ['cli'],
  'json': ['json'],
  'docx': ['docx'],
  'apscheduler': ['apscheduler'],
  'custom shapes': ['custom shapes'],
  'gesture handling': ['gesture handling'],
  'mvc/mvvm': ['mvc/mvvm'],
  'machine learning': ['machine learning'],
  'transformers': ['transformers'],
  'web scraping': ['selenium', 'beautifulsoup']
};