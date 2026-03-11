export interface Candidate {
  id: string;
  name: string;
}

export interface ElectionUnit {
  id: string;
  name: string;
  candidates: Candidate[];
  maxVotes: number;
  areas: string[];
}

export interface ElectionLevel {
  id: string;
  name: string;
  units: ElectionUnit[];
}

const ALL_AREAS = [
  'Văn Sơn', 'Văn Giàng', 'Thanh Cảm',
  'Trước', 'Ngò', 'An Bình', 'Xuân', 'Đọ', 'An Phong',
  'Tây', 'Kép', 'Dung', 'Can', 'Gáo', 'Hấn', 'Dõng', 'Chanh Áng',
  'Tân Tiến', 'Việt Tiến', 'Dũng Tiến', 'Đông Tiến', 'Nam Phú', 'Đình Phú', 'Đông Phú',
  'Xuân Phú', 'Xuân An', 'An Phú', 'Xuân Đông', 'Xuân Trung', 'Xuân Thượng'
];

export const ELECTION_DATA: ElectionLevel[] = [
  {
    id: 'quoc-hoi',
    name: 'Cấp Quốc hội: Đại biểu Quốc hội khóa XVI',
    units: [
      {
        id: 'qh-03',
        name: 'Đơn vị bầu cử số 03',
        maxVotes: 3,
        areas: ALL_AREAS,
        candidates: [
          { id: 'qh1', name: 'Đỗ Văn Chiến' },
          { id: 'qh2', name: 'Vũ Văn Cường' },
          { id: 'qh3', name: 'Phạm Văn Thịnh' },
          { id: 'qh4', name: 'Nguyễn Thị Hồng Vân' },
          { id: 'qh5', name: 'Lương Thị Yên' },
        ],
      },
    ],
  },
  {
    id: 'tinh',
    name: 'Cấp Tỉnh: Đại biểu HĐND tỉnh Bắc Ninh',
    units: [
      {
        id: 'tinh-09',
        name: 'Đơn vị bầu cử số 09',
        maxVotes: 5,
        areas: ALL_AREAS,
        candidates: [
          { id: 't1', name: 'Đặng Hồng Chiến' },
          { id: 't2', name: 'Phùng Thị Thu Hiền' },
          { id: 't3', name: 'Đặng Đình Hoan' },
          { id: 't4', name: 'Nguyễn Hồng Thái' },
          { id: 't5', name: 'Phan Thế Tuấn' },
          { id: 't6', name: 'Nguyễn Thị Vân' },
          { id: 't7', name: 'Nguyễn Văn Vịnh' },
          { id: 't8', name: 'Trần Thị Xuyến' },
        ],
      },
    ],
  },
  {
    id: 'phuong',
    name: 'Cấp Phường: Đại biểu HĐND phường Tân Tiến',
    units: [
      {
        id: 'phuong-01',
        name: 'Đơn vị bầu cử số 01',
        maxVotes: 2,
        areas: ['Văn Sơn', 'Văn Giàng', 'Thanh Cảm'],
        candidates: [
          { id: 'p1-1', name: 'Lương Đình Giáp' },
          { id: 'p1-2', name: 'Dương Văn Thúy' },
          { id: 'p1-3', name: 'Nguyễn Thị Vinh' },
        ],
      },
      {
        id: 'phuong-02',
        name: 'Đơn vị bầu cử số 02',
        maxVotes: 5,
        areas: ['Trước', 'Ngò', 'An Bình', 'Xuân', 'Đọ', 'An Phong'],
        candidates: [
          { id: 'p2-1', name: 'Đỗ Văn Dương' },
          { id: 'p2-2', name: 'Nguyễn Văn Hải' },
          { id: 'p2-3', name: 'Trần Thanh Hải' },
          { id: 'p2-4', name: 'Đỗ Văn Luyện' },
          { id: 'p2-5', name: 'Trần Ngọc Sơn' },
          { id: 'p2-6', name: 'Nguyễn Văn Thiệu' },
          { id: 'p2-7', name: 'Nguyễn Thị Thúy' },
          { id: 'p2-8', name: 'Bùi Quang Vinh' },
        ],
      },
      {
        id: 'phuong-03',
        name: 'Đơn vị bầu cử số 03',
        maxVotes: 5,
        areas: ['Tây', 'Kép', 'Dung', 'Can', 'Gáo', 'Hấn', 'Dõng', 'Chanh Áng'],
        candidates: [
          { id: 'p3-1', name: 'Hà Văn Chung' },
          { id: 'p3-2', name: 'Nguyễn Văn Độ' },
          { id: 'p3-3', name: 'Trần Thị Hà' },
          { id: 'p3-4', name: 'Trần Mạnh Hiếu' },
          { id: 'p3-5', name: 'Hoàng Văn Vượng' },
          { id: 'p3-6', name: 'Nguyễn Thị Xuân' },
          { id: 'p3-7', name: 'Giáp Thị Hải Yến' },
          { id: 'p3-8', name: 'Lê Hải Yến' },
        ],
      },
      {
        id: 'phuong-04',
        name: 'Đơn vị bầu cử số 04',
        maxVotes: 5,
        areas: ['Tân Tiến', 'Việt Tiến', 'Dũng Tiến', 'Đông Tiến', 'Nam Phú', 'Đình Phú', 'Đông Phú'],
        candidates: [
          { id: 'p4-1', name: 'Vũ Khánh Huệ' },
          { id: 'p4-2', name: 'Vũ Thế Hưng' },
          { id: 'p4-3', name: 'Nguyễn Thị Ngát' },
          { id: 'p4-4', name: 'Nguyễn Xuân Vẻ' },
          { id: 'p4-5', name: 'Nguyễn Thị Thanh Xuân' },
          { id: 'p4-6', name: 'Nguyễn Thị Xuyến' },
          { id: 'p4-7', name: 'Lương Thị Yến' },
          { id: 'p4-8', name: 'Nguyễn Thị Yến' },
        ],
      },
      {
        id: 'phuong-05',
        name: 'Đơn vị bầu cử số 05',
        maxVotes: 5,
        areas: ['Xuân Phú', 'Xuân An', 'An Phú', 'Xuân Đông', 'Xuân Trung', 'Xuân Thượng'],
        candidates: [
          { id: 'p5-1', name: 'Khổng Minh Đức' },
          { id: 'p5-2', name: 'Đỗ Huy Hoàng' },
          { id: 'p5-3', name: 'Lê Thị Kiểm' },
          { id: 'p5-4', name: 'Nguyễn Thị Lý' },
          { id: 'p5-5', name: 'Nguyễn Văn Mừng' },
          { id: 'p5-6', name: 'Lương Văn Sáu' },
          { id: 'p5-7', name: 'Trịnh Thanh Tâm' },
          { id: 'p5-8', name: 'Đỗ Quốc Việt' },
        ],
      },
    ],
  },
];
