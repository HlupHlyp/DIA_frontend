# Solar StaGeS
Данный репозиторий хранит в себе frontend приложения, разработанного для расчета генерации и сбережения солнечных электростанций, набор устройств которых определяется пользователем веб-сервиса.
## Использованные технологии
### React + TypeScript + Vite
## Алгоритмы
### 1. Алгоритм расчета генерации солнечной электростанции
Средние значения плотности солнечной энергии $[{МДж\overм^2}]$, доходящей до поверхности Земли за год.
Географическая широта [град.]| Северное полушарие | Южное полушарие |
--- | --- | --- |
 |90|5434|5434|
 |80|5591|5583|
 |70|6150|6151|
 |60|7442|7454|
 |50|8957|8985|
 |40|10388|10391|
 |30|11564|11564|
 |20|12444|12445|
 |10|12989|12989|
 |0|13178|13178|
 
Из поверхностной плотности солнечной энергии $I[{МДж\overм^2}]$, доходящей до Земли на заданной широте за 1 год, находим мощность солнечного излучения $P_{i}[Вт]$, падающего на площадь поверхности $S_{i}[м^2]$ i-ого типа солнечной панели.

$$ P_{i}={{I[МДж/м^2]\cdot10^6\over182[Дни]\cdot24[часы]\cdot3600[секунды]}\cdot S_{i}[м^2]} $$

Далее вычисляем КПД $η_{i}$ для каждого типа солнечной панели, входящего в станцию. Это несложно сделать, поскольку мощность солнечной панели $P_{пi}$ измеряется при инсоляции в $1000Вт/м^2$.

$$η_{i}={P_{пi}[Вт]\over{1000[{Вт\overм^2}]\cdot S_{i}[м^2]}}$$

Для получения средней суточной генерации E[Вт*ч] просуммируем энергии, производимые k наборомами из $n_{i}$ одинаковых солнечных батарей, которые являются ничем иным как премножением P_{i}, $η_{i}$ и $n_{i}$:

$$E=\sum_{i=1}^k E_{i}^2={\sum_{i=1}^k P_{i}\cdotη_{i}\cdot n_{i}}= \sum_{i=1}^k{{I\cdot10^6\cdot P_{пi}\cdot n\cdot S_{i}}\over{182\cdot24\cdot3600\cdot1000\cdot S_{i}}}=\sum_{i=1}^k{I\cdot P_{пi}\cdot n\over15724,8}$$
### 2. Алгоритм расчета сбережения солнечной электростанции
Основная формула:
$$η_{i}={P_{пi}[Вт]\over{1000[{Вт\overм^2}]\cdot S_{i}[м^2]}}$$
$$ E={\sum_{i=1}^k E_{i}^2} $$
E - запасаемая энергия

## Использованные ресурсы
1. Сайт с показателями инсоляции, использованными для сверки расчетов:
   https://andi-grupp.ru/informatsiya/stati/solnechnaya-insolyatsiya-v-gorodakh-rossii/?ysclid=m4e78eeqa9477965670
2. Репозиторий курса "Разработка интернет приложений":
   https://github.com/iu5git/Web/
3. Сайт с показателями инсоляции:
   https://bookonlime.ru/lecture/glava-3-solyarnyy-klimat-zemli-prostranstvennye-i-vremennye-izmeneniya-insolyacii
4. Сайт, с которого была позаимствована информации о расчете мощности солнечной панели:
   https://habr.com/ru/articles/482876/
Также было использована множество страница habr.com и stackoverflow.com.

