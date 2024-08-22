export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  
  export const calculateDaysUntilEvent = (eventDate) => {
    const today = new Date();
    const event = new Date(eventDate);
    const diffTime = event - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  