const config = {
  baseUrl: 'https://metar.vatsim.net',
};

function getFullMetarUrl(icao) {
  return `${config.baseUrl}/${icao}`;
}

async function getMetar(icao) {
  const url = getFullMetarUrl(icao);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Error when requesting metar', response);
    }

    return response.text();
  } catch (error) {
    console.error(error);
  }
}

exports.getMetar = getMetar;
