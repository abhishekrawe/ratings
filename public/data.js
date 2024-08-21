const data = [
  {
    id: 1,
    collegeDetails: {
      name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
      location: "Chennai, Tamil Nadu | AICTE Approved",
      program: "B.Tech in Computer Science and Engineering",
      admissionCutoff: "JEE-Advanced 2023 Cutoff: 144",
    },
    courseFees: {
      amount: "Rs. 2,09,550",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 21,48,000",
      highestPackage: "Rs. 1,98,00,000",
    },
    userReviews: {
      rating: "8.6/10",
      reviewCount: "Based on 289 Reviews",
      highlights: [
        {
          category: "Best in Social Life",
        },
        // {
        //   category: "Best in Placement",
        // },
        // {
        //   category: "Best in India",
        // },
      ],
    },
    rankings: {
      rank: "3rd/131 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 2,
    collegeDetails: {
      name: "IIT Delhi - Indian Institute of Technology - [IITD], New Delhi",
      location: "New Delhi, Delhi NCR",
      program: "B.Tech + M.tech Mathematics and Computing",
      admissionCutoff: "JEE-Advanced 2023 Cutoff: 115",
    },
    courseFees: {
      amount: "Rs. 2,54,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 25,82,000",
      highestPackage: "Rs. 2,00,00,000",
    },
    userReviews: {
      rating: "8.7/10",
      reviewCount: "Based on 485 Reviews",
      highlights: [
        // {
        //   category: "Best in Innovation",
        // },
        // {
        //   category: "Best in Campus Life",
        // },
        {
          category: "Best in Placements",
        },
      ],
    },
    rankings: {
      rank: "1st/35 in India",
      publications: [
        {
          name: "The Week",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0iqLqNb4WWjloVWnsLBEITn_jDg1lyc4fA&s",
        },
        {
          name: "NDTV",
          logo: "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
        },
        {
          name: "CNN",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s",
        },
      ],
    },
  },
  {
    id: 3,
    collegeDetails: {
      name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      location: "Mumbai, Maharashtra | AICTE, UGC Approved",
      program: "B.Tech Computer Science Engineering",
      admissionCutoff: "JEE-Advanced 2023 Cutoff: 66",
    },
    courseFees: {
      amount: "Rs. 2,29,300",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 21,82,000",
      highestPackage: "Rs. 3,67,00,000",
    },
    userReviews: {
      rating: "8.8/10",
      reviewCount: "Based on 306 user Reviews",
      highlights: [
        // {
        //   category: "Best in Faculty",
        // },
        // {
        //   category: "Best in Alumni Network",
        // },
        {
          category: "Best in Research Opportunities",
        },
      ],
    },
    rankings: {
      rank: "2nd/35 in India",
      rankedBy: "india_today.png",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 4,
    collegeDetails: {
      name: "Parul University , Vadodara",
      location: "Vadodra , Gujarat | AICTE COA , PCI , GNC Approved",
      program: "",
      admissionCutoff: "",
    },
    courseFees: {
      amount: "Rs. 1,49,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 4,00,000",
      highestPackage: "Rs. 30,00,000",
    },
    userReviews: {
      rating: "8.1/10",
      reviewCount: "Based on 802 Users Reviews",
      highlights: [
        {
          category: "Best in Infrastructure",
        },
        // {
        //   category: "Best in Research",
        // },
        // {
        //   category: "Best in Student Support",
        // },
      ],
    },
    rankings: {
      rank: "99th/147 in India",
      publications: [
        {
          name: "The Week",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0iqLqNb4WWjloVWnsLBEITn_jDg1lyc4fA&s",
        },
        {
          name: "NDTV",
          logo: "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
        },
        {
          name: "CNN",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s",
        },
      ],
    },
  },
  {
    id: 5,
    collegeDetails: {
      name: "BITS Pilani - Birla Institute of Technology and Science",
      location: "Pilani, Rajasthan",
      program: "B.E. in Computer Science",
      admissionCutoff: "BITSAT 2023 Cutoff: 310",
    },
    courseFees: {
      amount: "Rs. 3,50,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 18,00,000",
      highestPackage: "Rs. 45,00,000",
    },
    userReviews: {
      rating: "8.5/10",
      reviewCount: "Based on 325 Reviews",
      highlights: [
        // {
        //   category: "Best in Innovation",
        // },
        // {
        //   category: "Best in Facilities",
        // },
        {
          category: "Best in Entrepreneurship",
        },
      ],
    },
    rankings: {
      rank: "5th/150 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 6,
    collegeDetails: {
      name: "NIT Trichy - National Institute of Technology, Tiruchirappalli",
      location: "Tiruchirappalli, Tamil Nadu",
      program: "B.Tech in Chemical Engineering",
      admissionCutoff: "JEE-Main 2023 Cutoff: 85",
    },
    courseFees: {
      amount: "Rs. 1,90,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 12,00,000",
      highestPackage: "Rs. 28,00,000",
    },
    userReviews: {
      rating: "8.2/10",
      reviewCount: "Based on 210 Reviews",
      highlights: [
        // {
        //   category: "Best in Infrastructure",
        // },
        // {
        //   category: "Best in Industry Connections",
        // },
        {
          category: "Best in Campus Life",
        },
      ],
    },
    rankings: {
      rank: "8th/100 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 7,
    collegeDetails: {
      name: "SRM Institute of Science and Technology",
      location: "Kattankulathur, Tamil Nadu",
      program: "B.Tech in Mechanical Engineering",
      admissionCutoff: "SRMJEEE 2023 Cutoff: 115",
    },
    courseFees: {
      amount: "Rs. 1,75,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 8,00,000",
      highestPackage: "Rs. 20,00,000",
    },
    userReviews: {
      rating: "7.9/10",
      reviewCount: "Based on 500 Reviews",
      highlights: [
        // {
        //   category: "Best in Extracurricular Activities",
        // },
        // {
        //   category: "Best in Industry Exposure",
        // },
        {
          category: "Best in Student Life",
        },
      ],
    },
    rankings: {
      rank: "15th/150 in India",
      publications: [
        {
          name: "The Week",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0iqLqNb4WWjloVWnsLBEITn_jDg1lyc4fA&s",
        },
        {
          name: "NDTV",
          logo: "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
        },
        {
          name: "CNN",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s",
        },
      ],
    },
  },
  {
    id: 8,
    collegeDetails: {
      name: "Amity University, Noida",
      location: "Noida, Uttar Pradesh",
      program: "B.Tech in Information Technology",
      admissionCutoff: "Amity JEE 2023 Cutoff: 90",
    },
    courseFees: {
      amount: "Rs. 1,80,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 6,00,000",
      highestPackage: "Rs. 15,00,000",
    },
    userReviews: {
      rating: "7.5/10",
      reviewCount: "Based on 400 Reviews",
      highlights: [
        {
          category: "Best in Infrastructure",
        },
        // {
        //   category: "Best in Faculty",
        // },
        // {
        //   category: "Best in Campus Facilities",
        // },
      ],
    },
    rankings: {
      rank: "30th/150 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 9,
    collegeDetails: {
      name: "VIT Vellore - Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      program: "B.Tech in Civil Engineering",
      admissionCutoff: "VITEEE 2023 Cutoff: 95",
    },
    courseFees: {
      amount: "Rs. 1,95,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 7,00,000",
      highestPackage: "Rs. 18,00,000",
    },
    userReviews: {
      rating: "7.8/10",
      reviewCount: "Based on 350 Reviews",
      highlights: [
        {
          category: "Best in Facilities",
        },
        // {
        //   category: "Best in Industry Tie-ups",
        // },
        // {
        //   category: "Best in Campus Environment",
        // },
      ],
    },
    rankings: {
      rank: "12th/150 in India",
      publications: [
        {
          name: "The Week",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0iqLqNb4WWjloVWnsLBEITn_jDg1lyc4fA&s",
        },
        {
          name: "NDTV",
          logo: "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
        },
        {
          name: "CNN",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s",
        },
      ],
    },
  },
  {
    id: 10,
    collegeDetails: {
      name: "Jadavpur University",
      location: "Kolkata, West Bengal",
      program: "B.Tech in Electrical Engineering",
      admissionCutoff: "WBJEE 2023 Cutoff: 95",
    },
    courseFees: {
      amount: "Rs. 1,45,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 9,00,000",
      highestPackage: "Rs. 22,00,000",
    },
    userReviews: {
      rating: "8.3/10",
      reviewCount: "Based on 280 Reviews",
      highlights: [
        {
          category: "Best in Research Facilities",
        },
        // {
        //   category: "Best in Faculty",
        // },
        // {
        //   category: "Best in Alumni Network",
        // },
      ],
    },
    rankings: {
      rank: "13th/150 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 11,
    collegeDetails: {
      name: "Bangalore Institute of Technology",
      location: "Bangalore, Karnataka",
      program: "B.Tech in Electronics and Communication",
      admissionCutoff: "KCET 2023 Cutoff: 110",
    },
    courseFees: {
      amount: "Rs. 1,65,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 8,50,000",
      highestPackage: "Rs. 16,00,000",
    },
    userReviews: {
      rating: "7.6/10",
      reviewCount: "Based on 320 Reviews",
      highlights: [
        {
          category: "Best in Practical Training",
        },
        // {
        //   category: "Best in Industry Connections",
        // },
        // {
        //   category: "Best in Infrastructure",
        // },
      ],
    },
    rankings: {
      rank: "25th/150 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
  {
    id: 12,
    collegeDetails: {
      name: "Shiv Nadar University",
      location: "Greater Noida, Uttar Pradesh",
      program: "B.Tech in Computer Science",
      admissionCutoff: "SNUSAT 2023 Cutoff: 100",
    },
    courseFees: {
      amount: "Rs. 2,00,000",
      programType: "BE/BTech",
      duration: "1st Year Fees",
    },
    placements: {
      averagePackage: "Rs. 10,00,000",
      highestPackage: "Rs. 20,00,000",
    },
    userReviews: {
      rating: "8.0/10",
      reviewCount: "Based on 400 Reviews",
      highlights: [
        {
          category: "Best in Student Support",
        },
        // {
        //   category: "Best in Research Facilities",
        // },
        // {
        //   category: "Best in Campus Life",
        // },
      ],
    },
    rankings: {
      rank: "20th/150 in India",
      publications: [
        {
          name: "ABP",
          logo: "https://static.businessworld.in/1608101890_DKz9K0_new_abp_logo.jpg",
        },
        {
          name: "India Today",
          logo: "https://seekvectors.com/files/download/indiatoday-01.png",
        },
        {
          name: "NIRF",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        },
      ],
    },
  },
];

export default data;
