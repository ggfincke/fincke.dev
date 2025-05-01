// src/styles/sidebarAnimations.tsx

// animation styles for the sidebar
export const sidebarAnimation = {
  visible: {
    transform: 'translateX(0)',
    transition: 'transform 0.5s ease-in-out'
  },
  hidden: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out'
  }
};

// animation styles for the content
export const contentAnimation = {
  withSidebar: {
    paddingLeft: '18rem',
    transition: 'padding-left 0.5s ease-in-out'
  },
  fullWidth: {
    paddingLeft: '0',
    transition: 'padding-left 0.5s ease-in-out'
  }
}; 