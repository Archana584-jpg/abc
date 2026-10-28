export const columns = [
  {
    title: "S NO:",
    dataIndex: "index",
    key: "index",
    ellipsis: true,
    width: "5rem",
    render: (_, record, index) => index + 1,
  },
  {
    title: "MEMBER ID",
    dataIndex: "member_id",
    key: "member_id",
    ellipsis: true,
    width: "20rem",
  },
  {
    title: "ESTABLISHMENT NAME",
    dataIndex: "establishment_name",
    key: "establishment_name",
    ellipsis: true,
    width: "20rem",
  },
  {
    title: "DATE OF JOINING",
    dataIndex: "date_of_joining",
    key: "date_of_joining",
    ellipsis: true,
    width: "10rem",
  },
  {
    title: "DATE OF EXIT",
    dataIndex: "date_of_exit",
    key: "date_of_exit",
    ellipsis: true,
    width: "10rem",
  },
];
