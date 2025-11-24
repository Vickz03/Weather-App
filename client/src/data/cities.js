// Comprehensive list of cities from all continents and major countries
export const GLOBAL_CITIES = [
    // United States
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
    'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus',
    'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington DC',
    'Boston', 'Nashville', 'El Paso', 'Detroit', 'Portland', 'Las Vegas', 'Memphis',
    'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento',
    'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Colorado Springs', 'Raleigh', 'Miami',
    'Oakland', 'Minneapolis', 'Tulsa', 'Arlington', 'New Orleans', 'Wichita', 'Cleveland',

    // Canada
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg',
    'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa',

    // United Kingdom
    'London', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield', 'Manchester', 'Edinburgh',
    'Liverpool', 'Bristol', 'Cardiff', 'Belfast', 'Leicester', 'Coventry', 'Bradford',
    'Nottingham', 'Newcastle', 'Brighton', 'Hull', 'Plymouth', 'Stoke', 'Southampton',

    // Europe - France
    'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier',
    'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon',

    // Europe - Germany
    'Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf',
    'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg',

    // Europe - Italy
    'Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence',
    'Bari', 'Catania', 'Venice', 'Verona', 'Messina', 'Padua', 'Trieste',

    // Europe - Spain
    'Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia',
    'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo',

    // Europe - Other
    'Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Brussels', 'Antwerp', 'Ghent',
    'Vienna', 'Zurich', 'Geneva', 'Basel', 'Bern', 'Stockholm', 'Copenhagen', 'Oslo',
    'Helsinki', 'Dublin', 'Prague', 'Budapest', 'Warsaw', 'Krakow', 'Bucharest',
    'Athens', 'Lisbon', 'Porto', 'Belgrade', 'Sofia', 'Zagreb', 'Bratislava',

    // Asia - India
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata',
    'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
    'Bhopal', 'Visakhapatnam', 'Pimpri', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
    'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan', 'Vasai', 'Varanasi',
    'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
    'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
    'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubli',

    // Asia - China
    'Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Tianjin', 'Wuhan',
    'Dongguan', 'Chongqing', 'Nanjing', 'Shenyang', 'Hangzhou', 'Xian', 'Harbin',
    'Qingdao', 'Changchun', 'Dalian', 'Jinan', 'Zhengzhou', 'Kunming', 'Taiyuan',

    // Asia - Japan
    'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto',
    'Kawasaki', 'Saitama', 'Hiroshima', 'Sendai', 'Kitakyushu', 'Chiba', 'Sakai',

    // Asia - South Korea
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan',

    // Asia - Southeast Asia
    'Bangkok', 'Jakarta', 'Manila', 'Ho Chi Minh City', 'Singapore', 'Hanoi', 'Yangon',
    'Kuala Lumpur', 'Phnom Penh', 'Vientiane', 'Bandung', 'Surabaya', 'Cebu', 'Davao',
    'Makati', 'Quezon City', 'Medan', 'Semarang', 'Palembang', 'George Town',

    // Middle East
    'Dubai', 'Abu Dhabi', 'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Tehran', 'Istanbul',
    'Ankara', 'Izmir', 'Tel Aviv', 'Jerusalem', 'Amman', 'Baghdad', 'Damascus',
    'Doha', 'Kuwait City', 'Muscat', 'Manama', 'Beirut', 'Sharjah', 'Ajman',

    // Africa
    'Cairo', 'Lagos', 'Kinshasa', 'Johannesburg', 'Khartoum', 'Nairobi', 'Casablanca',
    'Addis Ababa', 'Cape Town', 'Durban', 'Pretoria', 'Alexandria', 'Abidjan', 'Kano',
    'Dar es Salaam', 'Algiers', 'Accra', 'Ibadan', 'Kampala', 'Luanda', 'Dakar',
    'Mogadishu', 'Rabat', 'Tunis', 'Harare', 'Lusaka', 'Maputo', 'Antananarivo',

    // South America
    'São Paulo', 'Rio de Janeiro', 'Buenos Aires', 'Lima', 'Bogotá', 'Santiago',
    'Caracas', 'Belo Horizonte', 'Guadalajara', 'Monterrey', 'Brasília', 'Fortaleza',
    'Salvador', 'Medellín', 'Cali', 'Quito', 'Guayaquil', 'Córdoba', 'Rosario',
    'Recife', 'Porto Alegre', 'Montevideo', 'La Paz', 'Santa Cruz', 'Asunción',

    // Oceania
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra',
    'Newcastle', 'Wollongong', 'Auckland', 'Wellington', 'Christchurch', 'Hamilton',

    // Central America & Caribbean
    'Mexico City', 'Havana', 'Panama City', 'San Juan', 'Santo Domingo', 'Port-au-Prince',
    'San José', 'Guatemala City', 'Managua', 'San Salvador', 'Tegucigalpa', 'Kingston',
    'Nassau', 'Bridgetown', 'Port of Spain',

    // Russia & Eastern Europe
    'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod',
    'Chelyabinsk', 'Samara', 'Omsk', 'Rostov', 'Ufa', 'Krasnoyarsk', 'Perm', 'Voronezh',
    'Volgograd', 'Kyiv', 'Minsk', 'Tbilisi', 'Yerevan', 'Baku',
];
