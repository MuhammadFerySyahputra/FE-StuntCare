/* eslint-disable no-console */
const whoData = {
  maleWeight: [
    { ageMonths: 0, range: [2.5, 3.9] },
    { ageMonths: 1, range: [3.4, 5.1] },
    { ageMonths: 2, range: [4.3, 6.3] },
    { ageMonths: 3, range: [5.0, 7.2] },
    { ageMonths: 4, range: [5.6, 7.8] },
    { ageMonths: 5, range: [6.0, 8.4] },
    { ageMonths: 6, range: [6.4, 8.8] },
    { ageMonths: 7, range: [6.7, 9.2] },
    { ageMonths: 8, range: [6.9, 9.6] },
    { ageMonths: 9, range: [7.1, 9.9] },
    { ageMonths: 10, range: [7.4, 10.2] },
    { ageMonths: 11, range: [7.6, 10.5] },
    { ageMonths: 12, range: [7.7, 10.8] },
    { ageMonths: 13, range: [7.9, 11.0] },
    { ageMonths: 14, range: [8.1, 11.3] },
    { ageMonths: 15, range: [8.3, 11.6] },
    { ageMonths: 16, range: [8.5, 11.8] },
    { ageMonths: 17, range: [8.7, 12.1] },
    { ageMonths: 18, range: [8.9, 12.4] },
    { ageMonths: 19, range: [9.1, 12.7] },
    { ageMonths: 20, range: [9.3, 13.0] },
    { ageMonths: 21, range: [9.5, 13.3] },
    { ageMonths: 22, range: [9.7, 13.5] },
    { ageMonths: 23, range: [9.9, 13.8] },
    { ageMonths: 24, range: [10.1, 14.1] },
  ],

  femaleWeight: [
    { ageMonths: 0, range: [2.4, 3.7] },
    { ageMonths: 1, range: [3.2, 4.8] },
    { ageMonths: 2, range: [3.9, 5.8] },
    { ageMonths: 3, range: [4.5, 6.6] },
    { ageMonths: 4, range: [5.0, 7.3] },
    { ageMonths: 5, range: [5.4, 7.8] },
    { ageMonths: 6, range: [5.7, 8.2] },
    { ageMonths: 7, range: [6.0, 8.6] },
    { ageMonths: 8, range: [6.3, 9.0] },
    { ageMonths: 9, range: [6.5, 9.3] },
    { ageMonths: 10, range: [6.7, 9.6] },
    { ageMonths: 11, range: [6.9, 9.9] },
    { ageMonths: 12, range: [7.0, 10.1] },
    { ageMonths: 13, range: [7.2, 10.4] },
    { ageMonths: 14, range: [7.4, 10.6] },
    { ageMonths: 15, range: [7.6, 10.8] },
    { ageMonths: 16, range: [7.8, 11.1] },
    { ageMonths: 17, range: [8.0, 11.3] },
    { ageMonths: 18, range: [8.1, 11.6] },
    { ageMonths: 19, range: [8.3, 11.8] },
    { ageMonths: 20, range: [8.5, 12.0] },
    { ageMonths: 21, range: [8.7, 12.3] },
    { ageMonths: 22, range: [8.8, 12.5] },
    { ageMonths: 23, range: [9.0, 12.7] },
    { ageMonths: 24, range: [9.2, 13.0] },
  ],

  maleHeight: [
    { ageMonths: 0, range: [46.1, 55.6] },
    { ageMonths: 1, range: [50.8, 60.6] },
    { ageMonths: 2, range: [54.4, 64.4] },
    { ageMonths: 3, range: [57.3, 67.6] },
    { ageMonths: 4, range: [59.7, 70.1] },
    { ageMonths: 5, range: [61.7, 72.2] },
    { ageMonths: 6, range: [63.6, 74.0] },
    { ageMonths: 7, range: [64.8, 75.5] },
    { ageMonths: 8, range: [66.2, 77.2] },
    { ageMonths: 9, range: [67.5, 78.7] },
    { ageMonths: 10, range: [68.7, 80.1] },
    { ageMonths: 11, range: [69.9, 81.5] },
    { ageMonths: 12, range: [71.0, 82.9] },
    { ageMonths: 13, range: [72.1, 84.2] },
    { ageMonths: 14, range: [73.1, 85.5] },
    { ageMonths: 15, range: [74.0, 86.8] },
    { ageMonths: 16, range: [75.0, 88.0] },
    { ageMonths: 17, range: [75.9, 89.2] },
    { ageMonths: 18, range: [76.8, 90.3] },
    { ageMonths: 19, range: [77.7, 91.5] },
    { ageMonths: 20, range: [78.5, 92.6] },
    { ageMonths: 21, range: [79.4, 93.7] },
    { ageMonths: 22, range: [80.2, 94.8] },
    { ageMonths: 23, range: [81.0, 95.9] },
    { ageMonths: 24, range: [81.8, 97.0] },
  ],

  femaleHeight: [
    { ageMonths: 0, range: [45.4, 54.7] },
    { ageMonths: 1, range: [49.8, 59.6] },
    { ageMonths: 2, range: [53.0, 63.2] },
    { ageMonths: 3, range: [55.6, 66.1] },
    { ageMonths: 4, range: [57.8, 68.6] },
    { ageMonths: 5, range: [59.6, 70.7] },
    { ageMonths: 6, range: [61.2, 72.5] },
    { ageMonths: 7, range: [62.7, 74.2] },
    { ageMonths: 8, range: [64.0, 75.8] },
    { ageMonths: 9, range: [65.3, 77.4] },
    { ageMonths: 10, range: [66.5, 78.9] },
    { ageMonths: 11, range: [67.7, 80.3] },
    { ageMonths: 12, range: [68.9, 81.7] },
    { ageMonths: 13, range: [70.0, 83.1] },
    { ageMonths: 14, range: [71.0, 84.4] },
    { ageMonths: 15, range: [71.9, 85.6] },
    { ageMonths: 16, range: [72.8, 86.8] },
    { ageMonths: 17, range: [73.6, 87.9] },
    { ageMonths: 18, range: [74.4, 89.0] },
    { ageMonths: 19, range: [75.2, 90.1] },
    { ageMonths: 20, range: [75.9, 91.2] },
    { ageMonths: 21, range: [76.7, 92.2] },
    { ageMonths: 22, range: [77.4, 93.3] },
    { ageMonths: 23, range: [78.1, 94.3] },
    { ageMonths: 24, range: [78.8, 95.4] },
  ],
};

function calculateWAZ(ageInMonths, weightKg, gender) {
  const data = gender === 'male' ? whoData.maleWeight : whoData.femaleWeight;
  const { range } = data.find((entry) => entry.ageMonths === ageInMonths);
  const zScore = (weightKg - range[0]) / (range[1] - range[0]);
  return zScore;
}

function calculateHAZ(ageInMonths, heightCm, gender) {
  const data = gender === 'male' ? whoData.maleHeight : whoData.femaleHeight;
  const { range } = data.find((entry) => entry.ageMonths === ageInMonths);
  const zScore = (heightCm - range[0]) / (range[1] - range[0]);
  return zScore;
}

function determineSPGA(waz, haz, ageInMonths, gender) {
  const isUnderweight = waz <= -2 || haz <= -2;
  const isModeratelyMalnourished = (waz > -2 && waz <= -1) || (haz > -2 && haz <= -1);
  //   const isWellNourished = waz > -1 && haz > -1;
  const isOverweight = waz > 1 || haz > 1;

  if (isOverweight) {
    const weightData = gender === 'male' ? whoData.maleWeight : whoData.femaleWeight;
    const heightData = gender === 'male' ? whoData.maleHeight : whoData.femaleHeight;
    const weightRange = weightData.find((entry) => entry.ageMonths === ageInMonths).range;
    const heightRange = heightData.find((entry) => entry.ageMonths === ageInMonths).range;

    return {
      status: 'Gizi Lebih (Overweight/Obese)',
      weightRecommendation: `Rekomendasi: Berat badan ideal diperlukan untuk kesehatan anak. Rentang berat badan yang normal untuk usia ini: ${weightRange[0]} - ${weightRange[1]} kg. Konsultasikan dengan dokter anak.`,
      heightRecommendation: `Rekomendasi: Tinggi badan ideal diperlukan untuk kesehatan anak. Rentang tinggi badan yang normal untuk usia ini: ${heightRange[0]} - ${heightRange[1]} cm. Konsultasikan dengan dokter anak.`,
    };
  }

  if (isUnderweight || isModeratelyMalnourished) {
    return {
      status: isUnderweight ? 'Gizi Buruk (Underweight/Stunted)' : 'Gizi Kurang (Moderately Malnourished)',
      weightRecommendation: 'Rekomendasi: Berat badan ideal diperlukan untuk kesehatan anak. Konsultasikan dengan dokter anak.',
      heightRecommendation: 'Rekomendasi: Tinggi badan ideal diperlukan untuk kesehatan anak. Konsultasikan dengan dokter anak.',
    };
  }

  return {
    status: 'Normal (Well-Nourished)',
    weightRecommendation: 'Berat badan anak sudah sesuai dengan perkiraan normal WHO untuk usia ini.',
    heightRecommendation: 'Tinggi badan anak sudah sesuai dengan perkiraan normal WHO untuk usia ini.',
  };
}

const ageMonths = 12;
const weightKg = 10;
const heightCm = 80;
const gender = 'male';

const waz = calculateWAZ(ageMonths, weightKg, gender);
const haz = calculateHAZ(ageMonths, heightCm, gender);

const result = determineSPGA(waz, haz, ageMonths, gender);

console.log(`Hasil Perhitungan SPGA untuk anak ${gender} usia ${ageMonths} bulan:`);
console.log(`- Z-Score Berat Badan Umur (WAZ): ${waz}`);
console.log(`- Z-Score Tinggi Badan Umur (HAZ): ${haz}`);
console.log(`- Kategori Status Perkembangan Gizi Anak (SPGA): ${result.status}`);
console.log(`- ${result.weightRecommendation}`);
console.log(`- ${result.heightRecommendation}`);
