export const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};


export const height = {
  initial: {
    height: 0,
  },

  enter: {
    height: "auto",
    transition : {
      duration : 1.5,
      ease : [0.76, 0, 0.24, 1],
      delay : 1.2
    }
  },

  exit: {
    transition : {
      duration : 1.5,
      ease : [0.76, 0, 0.24, 1],
      delay : 1.2
    }
  },
};

export const translate = {
  initial: {
    y: "100%",
  },
  enter: (i: number[]) => ({
    y: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const slide ={
  initial : {
    top : "-100vh"
  },
  enter : {
    top : "0vh",
    transition : {
      duration : 0.8,
      ease : [0.76, 0, 0.24, 1] ,
    }
  },
  exit : {
    top : "-100vh",
    transition : {
      duration : 0.8,
      ease : [0.76, 0, 0.24, 1] ,
      delay : 0.3
    }
  }
}

export const inject = {
  initial: {
    y: "100%",
  },
  enter: (i: number[]) => ({
    y: 0,
    transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}

export const popOut = {
  initial: { opacity: 0, y: 100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.7 },
  },
  exit:{
    opacity: 0,
    y: 100,
    transition: { duration: 0.3 },
  },
};

export const popIn = {
  initial: { opacity: 0, y: -100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.7 },
  },
  exit:{
    opacity: 0,
    y: -100,
    transition: { duration: 0.3 },
  },
};

export const opacity = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};


