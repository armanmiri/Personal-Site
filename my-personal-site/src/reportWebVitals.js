/**
 * Defines a function to report various web vitals.
 * 
 * @param {Function} onPerfEntry - A callback function that will be called when performance entries are reported.
 */
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function. This is necessary to ensure that the callback exists and is callable.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically imports the 'web-vitals' module, which includes functions to measure important user-centric performance metrics.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Once the module is imported, invoke these methods to get the different web vitals:
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Export the reportWebVitals function to make it available for use in other parts of the application.
export default reportWebVitals;
