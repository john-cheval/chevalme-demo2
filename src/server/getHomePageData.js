export async function getHomepageData() {
    const res = await fetch(
      "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8",
      {
        next: { revalidate: 3600 },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch homepage data");
    }
  
    return await res.json();
  }
  
  export async function getGoogleReviewsData() {
    const res = await fetch(
      "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews",
      {
        next: { revalidate: 3600 },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch Reviews data");
    }
  
    const data = await res.json();
    const googleReviewsSorted = data?.all_reviews || [];
    return { googleReviewsSorted, ...data };
  }
  