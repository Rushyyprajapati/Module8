const GEOGRAPHY_LIST = [
    // Existing data...
    {
        country: 'Fictionland',
        capital: 'Imaginaria',
        largestCity: 'Dreamsville',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Adventure Bay',
                capital: 'Storypoint',
                largestCity: 'Noveltown',
                area: 5000, // in square kilometers
            },
            {
                name: 'Mystery Island',
                capital: 'Clueville',
                largestCity: 'Puzzleton',
                area: 2500,
            },
        ],
    },
    {
        country: 'Techtopia',
        capital: 'Silicon City',
        largestCity: 'Digital Harbor',
        subdivisionName: 'sector',
        subdivisions: [
            {
                name: 'Innovation Valley',
                capital: 'Startup Central',
                largestCity: 'Code Cove',
                area: 1500,
            },
            {
                name: 'Gadgetland',
                capital: 'Gizmo Town',
                largestCity: 'Widget City',
                area: 1800,
            },
        ],
    },
];
document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');

    GEOGRAPHY_LIST.forEach(country => {
        let countryHTML = `<section><h2>${country.country}</h2><p>Capital: ${country.capital} | Largest City: ${country.largestCity}</p>`;
        let subdivisionsHTML = `<h3>${country.subdivisionName.charAt(0).toUpperCase() + country.subdivisionName.slice(1)}s</h3><ul>`;
        country.subdivisions.forEach(subdivision => {
            subdivisionsHTML += `<li><strong>${subdivision.name}</strong> - Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} km²</li>`;
        });
        subdivisionsHTML += '</ul></section>';
        mainElement.innerHTML += countryHTML + subdivisionsHTML;
    });
});
