const cityCodes = {
    toyama: '160010',  // 富山市
    sendai: '040010'   // 仙台市
};

const toyamaUrl = `https://weather.tsukumijima.net/api/forecast/city/${cityCodes.toyama}`;
const sendaiUrl = `https://weather.tsukumijima.net/api/forecast/city/${cityCodes.sendai}`;

async function getWeather1(){
    try {
        // 富山の天気データを取得
        const toyamaResponse = await fetch(toyamaUrl);
        const toyamaData = await toyamaResponse.json();
        document.getElementById('toyama-weather1').innerText = toyamaData.forecasts[0].telop;
        console.log(toyamaData)

        // 仙台の天気データを取得
        const sendaiResponse = await fetch(sendaiUrl);
        const sendaiData = await sendaiResponse.json();
        document.getElementById('sendai-weather1').innerText = sendaiData.forecasts[0].telop;

        // サイトの著作権情報を取得
        const siteResponse = await fetch(toyamaUrl);  // 修正済み
        const siteData = await siteResponse.json();
        document.getElementById('site-copyright').innerText = siteData.copyright.title; // 修正: telopではなく title を取得

    } catch (error) {
        console.error('エラーが発生しました:', error);
        document.getElementById('toyama-weather1').innerText = '天気情報の取得に失敗しました';
        document.getElementById('sendai-weather1').innerText = '天気情報の取得に失敗しました';
        document.getElementById('site-copyright').innerText = '著作権情報の取得に失敗しました';
    }
}

