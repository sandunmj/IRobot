export const APIRequests = command => {
  switch (command) {
    case 'LEFT':
      handleLeft();

    case 'RIGHT':
      handleRight();
    case 'FORWARD':
      handleForward();
    case 'BACKWARD':
      handleBackward();
  }
};
