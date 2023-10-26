
export const makeRequest = async function logMovies() {
    const response = await fetch("/api");
    this.Static.records = await response.json();
    console.log('=1e9057=',123,this.Static.records)
    this.init()
  }
 