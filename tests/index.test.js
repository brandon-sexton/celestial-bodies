import {getMoonPosition, getSunPosition} from '../src/lofi-positions';
import {Epoch} from 'otk-time-systems';
import {Vector} from 'otk-linear-algebra';


test('getSunPosition', () => {
  const epochs = [
    new Epoch('2024-01-06T00:00:00.000Z'),
    new Epoch('2024-01-07T00:00:00.000Z'),
    new Epoch('2024-01-08T00:00:00.000Z'),
    new Epoch('2024-01-09T00:00:00.000Z'),
    new Epoch('2024-01-10T00:00:00.000Z'),
    new Epoch('2024-01-11T00:00:00.000Z'),
    new Epoch('2024-01-12T00:00:00.000Z'),
    new Epoch('2024-01-13T00:00:00.000Z'),
    new Epoch('2024-01-14T00:00:00.000Z'),
    new Epoch('2024-01-15T00:00:00.000Z'),
    new Epoch('2024-01-16T00:00:00.000Z'),
  ];
  const truths = [
    new Vector(
        3.759406299589556e7,
        -1.304865176762959e8,
        -5.656457794081519e7,
    ),
    new Vector(
        4.011895593595600e7,
        -1.298544594559394e8,
        -5.629069648788295e7,
    ),
    new Vector(
        4.263152447115933e7,
        -1.291818293877027e8,
        -5.599921669820902e7,
    ),
    new Vector(
        4.513094593277208e7,
        -1.284688063609091e8,
        -5.569021127964072e7,
    ),
    new Vector(
        4.761639116697670e7,
        -1.277155904318587e8,
        -5.536376258301205e7,
    ),
    new Vector(
        5.008702661257784e7,
        -1.269224063172881e8,
        -5.501996454990348e7,
    ),
    new Vector(
        5.254201838180557e7,
        -1.260895065652138e8,
        -5.465892455506148e7,
    ),
    new Vector(
        5.498053824197647e7,
        -1.252171733627739e8,
        -5.428076458155205e7,
    ),
    new Vector(
        5.740177059601343e7,
        -1.243057180608922e8,
        -5.388562120408621e7,
    ),
    new Vector(
        5.980491896500193e7,
        -1.233554781325601e8,
        -5.347364417760246e7,
    ),
    new Vector(
        6.218921052174193e7,
        -1.223668121585819e8,
        -5.304499390046708e7,
    ),
  ];
  for (let i = 0; i < epochs.length; ++i) {
    const epoch = epochs[i];
    const truth = truths[i];
    const sunPosition = getSunPosition(epoch);
    expect(sunPosition.getAngle(truth)).toBeCloseTo(0, 2);
    expect(sunPosition.magnitude()/truth.magnitude()).toBeCloseTo(1, 2);
  }
});

test('getMoonPosition', () => {
  const epochs = [
    new Epoch('2024-01-06T00:00:00.000Z'),
    new Epoch('2024-01-07T00:00:00.000Z'),
    new Epoch('2024-01-08T00:00:00.000Z'),
    new Epoch('2024-01-09T00:00:00.000Z'),
    new Epoch('2024-01-10T00:00:00.000Z'),
    new Epoch('2024-01-11T00:00:00.000Z'),
    new Epoch('2024-01-12T00:00:00.000Z'),
    new Epoch('2024-01-13T00:00:00.000Z'),
    new Epoch('2024-01-14T00:00:00.000Z'),
    new Epoch('2024-01-15T00:00:00.000Z'),
    new Epoch('2024-01-16T00:00:00.000Z'),
  ];
  const truths = [
    new Vector(
        -3.200503942939173e5,
        -2.060754587016677e5,
        -9.905893514007684e4,
    ),
    new Vector(
        -2.584908250870990e5,
        -2.587512826129046e5,
        -1.294054357320367e5,
    ),
    new Vector(
        -1.835414302452757e5,
        -2.982032710728751e5,
        -1.531256810434766e5,
    ),
    new Vector(
        -9.863445975034362e4,
        -3.217449635840282e5,
        -1.686572414444363e5,
    ),
    new Vector(
        -8.100319675575884e3,
        -3.273531288380726e5,
        -1.747636509123949e5,
    ),
    new Vector(
        8.298065386307276e4,
        -3.139621289652325e5,
        -1.706976822718479e5,
    ),
    new Vector(
        1.690914641061062e5,
        -2.817321793003365e5,
        -1.563561460078961e5,
    ),
    new Vector(
        2.447483628649566e5,
        -2.322058849306288e5,
        -1.323799675298869e5,
    ),
    new Vector(
        3.050531778718394e5,
        -1.682773251351521e5,
        -1.001563713766415e5,
    ),
    new Vector(
        3.462048715578554e5,
        -9.395037766749633e4,
        -6.170647225280854e4,
    ),
    new Vector(
        3.658509151872286e5,
        -1.393514761764020e4,
        -1.948043803759190e4,
    ),
  ];
  for (let i = 0; i < epochs.length; ++i) {
    const epoch = epochs[i];
    const truth = truths[i];
    const moonPosition = getMoonPosition(epoch);
    expect(moonPosition.getAngle(truth)).toBeCloseTo(0, 2);
    expect(moonPosition.magnitude()/truth.magnitude()).toBeCloseTo(1, 2);
  }
});
