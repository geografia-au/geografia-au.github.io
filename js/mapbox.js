var ready;
ready = function() {
  var projects = [
    {
      "id": null,
      "title": "Winchelsea Economic Options Study",
      "latitude": -38.1439,
      "longitude": 143.591,
      "slug": "winchelsea-economic-options-study",
      "preview": "Winchelsea prepares for economic and employment growth"
    },
    {
      "id": null,
      "title": "Greater Launceston Plan",
      "latitude": -41.4297,
      "longitude": 147.117,
      "slug": "greater-launceston-plan",
      "preview": "Informing the public about the Greater Launceston Plan "
    },
    {
      "id": null,
      "title": "Ferntree Gully Not for Profit Sector Study",
      "latitude": -37.8815,
      "longitude": 145.295,
      "slug": "ferntree-gully-not-for-profit-sector-study",
      "preview": "Not-For-Profit sector a major contributor to the local economy"
    },
    {
      "id": null,
      "title": "Greater Bunbury Population and Housing Capacity Review",
      "latitude": -33.3271,
      "longitude": 115.639,
      "slug": "greater-bunbury-population-and-housing-capacity-review",
      "preview": "As housing density can be slow to change, rapid regional growth can put pressure on land supply"
    },
    {
      "id": null,
      "title": "Shepparton Rail Economic Impact Study",
      "latitude": -36.3767,
      "longitude": 145.402,
      "slug": "shepparton-rail-economic-impact-study",
      "preview": "Improved passenger rail services can drive regional population and economic growth and efficiency"
    },
    {
      "id": null,
      "title": "Modelling School Demand",
      "latitude": -37.8128,
      "longitude": 144.976,
      "slug": "estimating-school-enrolment-demands",
      "preview": "School demand predictions can be significantly more accurate with relatively straightforward improvement in statistical modelling"
    },
    {
      "id": null,
      "title": "Georgetown World Heritage Precinct Land Use Survey",
      "latitude": 5.41667,
      "longitude": 100.334,
      "slug": "georgetown-world-heritage-precinct-baseline-land-use-survey",
      "preview": "Designing and implementing a land use census of World Heritage listed George Town"
    },
    {
      "id": null,
      "title": "Moreland Industrial Land Strategy",
      "latitude": -37.7416,
      "longitude": 144.966,
      "slug": "moreland-industrial-land-use-strategy",
      "preview": "Rezoning decisions are guided by the long-term economic value of Moreland's industrial precincts"
    },
    {
      "id": null,
      "title": "Brimbank National Employment Cluster Study",
      "latitude": -37.784,
      "longitude": 144.838,
      "slug": "brimbank-national-emploment-cluster-study",
      "preview": "Modelling and GIS produces likely growth scenarios in Sunshine"
    },
    {
      "id": null,
      "title": "Stockman Mine Economic Impact Study",
      "latitude": -36.955,
      "longitude": 147.736,
      "slug": "stockman-mine-economic-impact-study",
      "preview": "A sound evidence-base for discussing community development contributions from the private sector"
    },
    {
      "id": null,
      "title": "Karratha 2020",
      "latitude": -20.7354,
      "longitude": 116.846,
      "slug": "karratha-2020",
      "preview": "Community infrastructure is essential to sustaining productivity in Karratha"
    },
    {
      "id": null,
      "title": "Wanneroo Land Use Vision",
      "latitude": -31.7497,
      "longitude": 115.806,
      "slug": "wanneroo-land-use-vision",
      "preview": "Helping you to visualise change using different models for housing, land development and transport\r\n"
    },
    {
      "id": null,
      "title": "Newman Economic Impact Study",
      "latitude": -23.3611,
      "longitude": 119.76,
      "slug": "newman-economic-impact-study",
      "preview": "Mine camps can place significant pressure on small town services\r\n"
    },
    {
      "id": null,
      "title": "Western Australian Economic and Employment Forecasts",
      "latitude": -31.9527,
      "longitude": 115.872,
      "slug": "ten-year-economic-and-employment-forecasts",
      "preview": "Mining and gas industry cycles create volatility in Western Australia's employment and economic output\r\n"
    },
    {
      "id": null,
      "title": "Darebin City Council Small Area Population Projections",
      "latitude": -37.7397,
      "longitude": 145.005,
      "slug": "darebin-city-council-small-area-population-projections",
      "preview": "Infill development will drive dwelling and population changes\r\n"
    },
    {
      "id": null,
      "title": "Lindenow Agricultural Intensification Cost Benefit Analysis",
      "latitude": -37.8002,
      "longitude": 147.458,
      "slug": "lindenow-agricultural-intensification-cost-benefit-analysis",
      "preview": "Enhanced water security stimulates agricultural production, diversification, employment and population growth\r\n"
    },
    {
      "id": null,
      "title": "Metropolitan Perth Local Government Reform: Demographic Analysis",
      "latitude": -32.056,
      "longitude": 115.747,
      "slug": "metropolitan-perth-local-government-reform-demographic-analysis",
      "preview": "New municipal boundaries will significantly change the character of some communities"
    },
    {
      "id": null,
      "title": "Newcastle Urban Renewal Study",
      "latitude": -32.9266,
      "longitude": 151.772,
      "slug": "newcastle-urban-renewal-study",
      "preview": "Location, infrastructure and heritage create diverse opportunities for central Newcastle"
    },
    {
      "id": null,
      "title": "Broome Economic Development Strategy",
      "latitude": -17.9511,
      "longitude": 122.244,
      "slug": "broome-economic-development-strategy",
      "preview": "Positioning Broome to be the Kimberley's 'supertown'"
    },
    {
      "id": null,
      "title": "Royal Agricultural Society of Victoria's Economic \u0026 Social Impact Assessment",
      "latitude": -37.7822,
      "longitude": 144.912,
      "slug": "royal-agricultural-society-of-victoria-s-economic-social-impact-assessment",
      "preview": "The Royal Melbourne Show has a significant and positive effect on GSP \r\n"
    },
    {
      "id": null,
      "title": "Golden Plains Economic Development \u0026 Tourism Strategy",
      "latitude": -38.0435,
      "longitude": 144.175,
      "slug": "golden-plains-economic-development-strategy",
      "preview": "The balancing act between intensive farming and residential development"
    },
    {
      "id": null,
      "title": "Southern Grampians Economic Development and Retail Strategy",
      "latitude": -37.7422,
      "longitude": 142.024,
      "slug": "southern-grampians-2015-economic-scorecard",
      "preview": "Agribusiness the driving force behind the Shire's economy"
    },
    {
      "id": null,
      "title": "Macedon Ranges Agribusiness Plan",
      "latitude": -37.4476,
      "longitude": 144.543,
      "slug": "macedon-ranges-agribusiness-plan-d1da76f3-fb77-4007-a3b5-ebec5310bbe5",
      "preview": "A 20 year plan to support and develop agribusiness in the Shire"
    },
    {
      "id": null,
      "title": "Loch Sport Population Study",
      "latitude": -38.0545,
      "longitude": 147.578,
      "slug": "loch-sport-population-study",
      "preview": "Can targeted public and private investment stimulate population growth in Loch Sport?\r\n"
    },
    {
      "id": null,
      "title": "The Pilbara Plan",
      "latitude": -22.172,
      "longitude": 117.925,
      "slug": "the-pilbara-plan",
      "preview": "A comprehensive infrastructure and services plan to help sustain economic activity in the Pilbara region"
    },
    {
      "id": null,
      "title": "The Need for High Speed Broadband",
      "latitude": -38.0184,
      "longitude": 145.216,
      "slug": "the-need-for-high-speed-broadband",
      "preview": "More jobs and investment if the NBN rollout prioritises business precincts over residential in Melbourne's South East"
    },
    {
      "id": null,
      "title": "Georgetown Conurbation Spatial Strategy",
      "latitude": 5.40263,
      "longitude": 100.466,
      "slug": "georgetown-conurbation-spatial-strategy",
      "preview": "A strategy to improve spatial analysis across Northern Malaysia"
    },
    {
      "id": null,
      "title": "Preston Beach Population, Economic and Infrastructure Study",
      "latitude": -32.8829,
      "longitude": 115.658,
      "slug": "preston-beach-population-economic-and-infrastructure-study",
      "preview": "With the right infrastructure priorities, we can nudge small coastal towns along a sustainable development pathway"
    },
    {
      "id": null,
      "title": "Victorian Small Towns Study",
      "latitude": -36.1803,
      "longitude": 147.903,
      "slug": "victorian-small-towns-study",
      "preview": "Recipes for economic success for Victoria's small towns"
    },
    {
      "id": null,
      "title": "Advancing Orbost Economic Development Strategy",
      "latitude": -37.7046,
      "longitude": 148.456,
      "slug": "advancing-orbost-economic-development-strategy",
      "preview": "Working with communities identifies economic opportunities in growth industries"
    },
    {
      "id": null,
      "title": "Latrobe City: Population and Economic Indicators",
      "latitude": -38.2365,
      "longitude": 146.395,
      "slug": "latrobe-city-population-and-economic-indicators",
      "preview": "Profiling Eastern Victoria's only regional city"
    },
    {
      "id": null,
      "title": "Prospect Vale Structure Plan",
      "latitude": -41.48,
      "longitude": 147.127,
      "slug": "prospect-vale-structure-plan",
      "preview": "A bold plan for a high amenity residential development"
    },
    {
      "id": null,
      "title": "Robinvale Family Centre Feasibility",
      "latitude": -34.584,
      "longitude": 142.772,
      "slug": "robinvale-family-centre-feasibility",
      "preview": "A multi-purpose family centre essential for this diverse community"
    },
    {
      "id": null,
      "title": "Employment and Skills Gaps in Outer Metropolitan Growth Areas",
      "latitude": -33.7691,
      "longitude": 150.908,
      "slug": "employment-and-skills-gaps-in-outer-metropolitan-growth-areas",
      "preview": "A mix of jobs and skills deficits create unique challenges in each of the 25 national growth area alliance councils"
    },
    {
      "id": null,
      "title": "Melbourne Population \u0026 Economic Projections and Profile",
      "latitude": -37.8165,
      "longitude": 144.947,
      "slug": "melbourne-population-economic-projections-and-profile",
      "preview": "On current trends, City of Melbourne's population to double by 2036"
    },
    {
      "id": null,
      "title": "School Demand Forecasting in Moreton Bay",
      "latitude": -27.0833,
      "longitude": 152.951,
      "slug": "school-demand-forecasting-in-moreton-bay",
      "preview": "Improving school demand forecasting through better statistical and GIS analysis."
    },
    {
      "id": null,
      "title": "School Site Optimisation in Greater Brisbane",
      "latitude": -26.6272,
      "longitude": 153.039,
      "slug": "school-site-optimisation-in-greater-brisbane",
      "preview": "Improving school site location optimisation"
    },
    {
      "id": null,
      "title": "Economic Impact of Upgrades to Naracoorte Livestock Exchange",
      "latitude": -36.9551,
      "longitude": 140.742,
      "slug": "value-adding-to-the-naracoorte-livestock-exchange",
      "preview": "Upgrading the livestock exchanges returns a net benefit"
    },
    {
      "id": null,
      "title": "Greater Bunbury Global and Regional Futures",
      "latitude": -33.3234,
      "longitude": 116.657,
      "slug": "greater-bunbury-global-and-regional-futures",
      "preview": "Greater Bunbury has untapped potential in agribusiness, manufacturing and tourism"
    },
    {
      "id": null,
      "title": "Penrith Economic Development \u0026 Tourism Strategy",
      "latitude": -33.7501,
      "longitude": 150.689,
      "slug": "penrith-economic-development-strategy",
      "preview": "Land and infrastructure assets give Penrith a competitive edge"
    },
    {
      "id": null,
      "title": "Court Service Demand Modelling",
      "latitude": -37.814,
      "longitude": 144.957,
      "slug": "court-demand-modelling-across-victoria",
      "preview": "Growing demand for court services across the State"
    },
    {
      "id": null,
      "title": "Wellington Economic Development \u0026 Tourism Strategy",
      "latitude": -38.1112,
      "longitude": 147.064,
      "slug": "wellington-economic-development-strategy",
      "preview": "Wellington Shire punches above its weight in agribusiness, manufacturing and services"
    },
    {
      "id": null,
      "title": "Technology and Innovation Study",
      "latitude": 5.42286,
      "longitude": 100.332,
      "slug": "technology-and-innovation-study",
      "preview": "Targeted public investment as a catalyst for private sector investment"
    },
    {
      "id": null,
      "title": "Greater Bunbury Population Analysis",
      "latitude": -33.327,
      "longitude": 115.637,
      "slug": "greater-bunbury-population-analysis",
      "preview": "Employment-based population forecasts are more reliable in rapidly growing regional Western Australia"
    },
    {
      "id": null,
      "title": "East Arnhem Land Economic Review",
      "latitude": -12.0197,
      "longitude": 135.57,
      "slug": "east-arnhem-land-economic-review",
      "preview": "Economic modelling and GIS outlines the potential growth opportunities in Galiwink'u, East Arnhem Land"
    },
    {
      "id": null,
      "title": "Greater Geraldton Expenditure Analysis",
      "latitude": -28.776,
      "longitude": 114.612,
      "slug": "greater-geraldton-expenditure-analysis",
      "preview": "Regional expenditure leakage is a signal for business opportunity"
    },
    {
      "id": null,
      "title": "Murchison Plan",
      "latitude": -40.9904,
      "longitude": 145.726,
      "slug": "murchison-plan",
      "preview": "Untapped tourism and lifestyle potential in NW Tasmania"
    },
    {
      "id": null,
      "title": "Darebin Arts ESIA",
      "latitude": -37.7394,
      "longitude": 145.004,
      "slug": "darebin-arts-esia",
      "preview": "Analysis demonstrates the growing importance of the creative industries"
    },
    {
      "id": null,
      "title": "Mornington HBB Survey",
      "latitude": -38.2175,
      "longitude": 145.036,
      "slug": "mornington-hbb-survey",
      "preview": "Surveys identify just how large the home based business sector is in Mornington Peninsula"
    },
    {
      "id": null,
      "title": "Alexandra Master Plan",
      "latitude": -37.1843,
      "longitude": 145.714,
      "slug": "alexandra-master-plan",
      "preview": "Masterplanning that builds on the historical legacy of a beautiful historical railway precinct"
    },
    {
      "id": null,
      "title": "Business Opportunities in an Ageing Population",
      "latitude": -37.8248,
      "longitude": 147.632,
      "slug": "business-opportunities-in-an-ageing-population",
      "preview": "The first generation of consumers is retiring. What opportunities does this create?"
    },
    {
      "id": null,
      "title": "Planning for Sustainable Tourism on Tasmania's East Coast",
      "latitude": -41.3222,
      "longitude": 148.251,
      "slug": "planning-for-sustainable-tourism-on-tasmania-s-east-coast",
      "preview": "The key to the viability of east coast tourism is longer visits"
    },
    {
      "id": null,
      "title": "Business Opportunities from High Water Security in Wodonga",
      "latitude": -36.1227,
      "longitude": 146.888,
      "slug": "high-water-security-in-wodonga",
      "preview": "Food and beverage industry prospects in Wodonga off the back of high water security"
    },
    {
      "id": null,
      "title": "Mandurah Public Open Space Study",
      "latitude": -32.5264,
      "longitude": 115.721,
      "slug": "mandurah-public-open-space-study",
      "preview": "Public open space planning in one of the fastest growing municipalities in Australia"
    },
    {
      "id": null,
      "title": "Economic Impact of Arts Venues in Melbourne",
      "latitude": -37.4918,
      "longitude": 144.587,
      "slug": "economic-impact-of-arts-venues-in-melbourne",
      "preview": "There is a measurable local term impact of artist-led gentrification on Melbourne's economy"
    },
    {
      "id": null,
      "title": "Value of Manufacturing in South East Melbourne",
      "latitude": -37.9886,
      "longitude": 145.212,
      "slug": "2afcbd39-a9a8-4a16-97d5-80653c19fb6e",
      "preview": "South east Melbourne is the heart of manufacturing in Australia "
    },
    {
      "id": null,
      "title": "Maddington Kenwick Education and Training Services Profile",
      "latitude": -32.054,
      "longitude": 115.979,
      "slug": "maddington-kenwick-education-and-training-services-profile",
      "preview": "Investment in early education can help turn around a disadvantaged community"
    },
    {
      "id": null,
      "title": "Binningup Demographic Profile and Infrastructure Need Assessment",
      "latitude": -33.15,
      "longitude": 115.689,
      "slug": "binningup-demographic-profile-and-infrastructure-need-assessment",
      "preview": "Historical coastal town growth trajectories sheds light on Binningup's future"
    },
    {
      "id": null,
      "title": "Alkimos Eglinton Population Projections and Facility and Services Needs Assessment",
      "latitude": -31.6003,
      "longitude": 115.657,
      "slug": "alkimos-eglinton-population-projections-and-facility-and-services-needs-assessment",
      "preview": "Sustainability is the key feature of one of Perth's largest new subdivisions in recent years"
    },
    {
      "id": null,
      "title": "Boroondara Arts and Cultural Strategy",
      "latitude": -37.8344,
      "longitude": 145.059,
      "slug": "boroondara-arts-and-cultural-strategy",
      "preview": "Eager arts participants need a little more geographical spread to arts facilities"
    },
    {
      "id": null,
      "title": "Rockingham Community Development Plan",
      "latitude": -32.2864,
      "longitude": 115.746,
      "slug": "rockingham-community-development-plan",
      "preview": "Driven by a 'Boom' economy, both population and housing demand are growing fast"
    },
    {
      "id": null,
      "title": "Knowledge Jobs in Melbourne's SE",
      "latitude": -37.4853,
      "longitude": 145.134,
      "slug": "knowledge-jobs-in-melbourne-s-se",
      "preview": "Creating innovation and knowledge-based business employment in Melbourne's south-east"
    },
    {
      "id": null,
      "title": "George Town Grants Program",
      "latitude": 5.41496,
      "longitude": 100.329,
      "slug": "george-town-grants-program",
      "preview": "Think City's grants program has had an enormous positive impact on local investment"
    }
  ];

  function present_map() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VvbWwiLCJhIjoiNjNZUEFJVSJ9.eMgXDUTt2B7FgivXr5rS7g';
    // L.mapbox.accessToken = 'pk.eyJ1IjoieXVud2VpIiwiYSI6IkhvMlVpZnMifQ.dQ98oRvdtNu2LzqmbnX0PQ';
    var map = L.mapbox.map('home-map', 'geoml.kh2o35lb',{scrollWheelZoom: false});
    // var map = L.mapbox.map('home-map', 'yunwei.km8c678p',{scrollWheelZoom: false})
    // .setView([-13.582, 133.55], 4);

    var markers = new L.MarkerClusterGroup({showCoverageOnHover: false });

    for (var i = 0; i < projects.length; i++) {
      var project = projects[i];
      var title = project.title;
      var marker = L.marker(new L.LatLng(project.latitude,project.longitude), {
        icon: L.mapbox.marker.icon({'marker-color': 'D50000'}),
        title: project.id
      });
      marker.on('mouseover', function(e){
        var p;
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].id == e.target.options.title) {
            p = projects[i];
          }
        }

      });
      marker.bindPopup("<h4>"+project.title+"</h4>"+project.preview+"<a href='/projects/"+project.slug+"'><br><button type='button' class='btn btn-xs btn-danger'>More info.</button></a>").openPopup();
      markers.addLayer(marker);
    }

    map.addLayer(markers);
    map.fitBounds(markers.getBounds());
  }

  present_map();
};

$(document).ready(ready);
$(document).on('page:load', ready);
