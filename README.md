### Алгоритм расчета генерации солнечной электростанции
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
 
Из поверхностной плотности солнечной энергии $I[{МДж\overм^2}]$, дохадящей до земли на заданной широте за год, находим мощность солнечного излучения $P[Вт]$, падающего на площадь поверхности солнечной панели $S[м^2]$.

$$ P={{I[МДж/м^2]\cdot10^6\over182[Дни]\cdot24[часы]\cdot3600[секунды]}\cdot S[м^2]} $$

Далее вычисляем КПД $η_{i}$ для каждого типа солнечной панели, входящего в станцию. Это несложно сделать, поскольку мощность солнечной панели $P_{пi}$ измеряется при инсоляции в $1000Вт/м^2$.

$$η_{i}={P_{пi}[Вт]\over{1000[{Вт\overм^2}]\cdot S[м^2]}}$$

Для получения средней суточной генерации E[Вт*ч] просуммируем энергии, производимые k наборомами из $n_{i}$ одинаковых солнечных батарей, которые являются ничем иным как премножением P, $η_{i}$ и $n_{i}$:

$$E=(\sum_{i=1}^k E_{i})^2={P\cdotη\cdot n}={{I\cdot10^6\cdot P_{c}\cdot S\cdot n}\over{cdot182\cdot24\cdot3600\cdot1000\cdot S}}={I\cdot P_п\cdot n\over15724,8}$$




