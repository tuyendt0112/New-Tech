import React from "react";
import "../styles/listblog.scss";
import { withRouter } from "react-router";
import DetailPost from "./DetailPost";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";
class ListBlog extends React.Component {
  state = {
    ListBlog: [
      {
        id: "1",
        title: "Chelsea đón tin xấu",
        content:
          "SAO trẻ chấn thương nguy cơ lỡ đại chiến Arsenal,Chelsea vừa đón nhận tin dữ về lực lượng trong bối cảnh họ sẽ đối đầu với Arsenal ở vòng 9 Ngoại hạng Anh cuối tuần này.Cole Palmer đã dính chấn thương đùi trong trận thắng 9-1 của U21 Anh trước U21 Serbia ở vòng loại U21 châu Âu hôm 13/10. Bản hợp đồng trị giá 45 triệu bảng của Chelsea ra dấu bị đau ở đùi ngay đầu hiệp hai, buộc HLV Lee Carsley phải rút anh ra sân ở phút 52.",
        comments: [
          { author: "Son Danh", description: " good shit!" },
          { author: "Trung Nguyen", description: " Tin chuan khong anh!" },
          { author: "Truong Tai", description: " chupapibunhanho!" },
        ],
      },
      {
        id: "2",
        title: "Án mạng từ chuyện nghi vợ ngoại tình với đồng nghiệp",
        content:
          "Đêm 2/7, rạng sáng 3/7/1995, sĩ quan cảnh sát Ahmed Nazir Kunju cùng một đồng nghiệp làm nhiệm vụ tuần tra ban đêm ở một khu dân cư tại Delhi (Ấn Độ). Đường phố lúc đó rất yên tĩnh, không có nhiều người. Đột nhiên họ nhận thấy một cột khói lớn bốc lên. Khi tìm kiếm nơi phát ra cột khói, Ahmed nghe thấy tiếng tri hô lớn của người phụ nữ bán rau gần đó thông báo có cháy. Sĩ quan Ahmed nhanh chóng chạy tới một nhà hàng và nhìn thấy ngọn lửa lớn bất thường bên trong lò đất sét. Anh ngửi thấy mùi khóc chịu bốc ra từ đó.",
        comments: [{ author: "skip04", description: "это ужасно" }],
      },
      {
        id: "3",
        title:
          "Dàn gái xinh Việt mặc nóng bỏng đi bắn cung, kém gì các hot girl xứ Hàn, Trung?",
        content:
          "Mới đây, một người đẹp Sài thành gây chú ý khi đi bắn cung trong bộ đồ tôn dáng.Cô nàng này tên là Mỹ Duyên - một hot girl mạng xã hội sở hữu trang cá nhân có lượng người theo dõi cao.",
        comments: [
          { author: "ripperass", description: "tâm hồn cô ấy to và tròn" },
        ],
      },
      {
        id: "4",
        title:
          "Barbie sống Hàn Quốc tròn 19 tuổi đẹp như tranh, vẫn bị mang tiếng sửa mặt",
        content:
          "Mới đây, trên nhiều diễn đàn trực tuyến chia sẻ lại hình ảnh Jang Wonyoung với diện mạo mới. Mái tóc vàng óng ả cùng layout makeup trong trẻo giúp Jang Wonyoung ghi điểm mạnh trong mắt người hâm mộ. Ở dưới bài đăng, netizen thảo luận sôi nổi về những bức hình mới của thành viên IVE và gọi cô bằng biệt danh Barbie người thật vì quá giống búp bê Barbie - một người nhận xét.",
        comments: [
          { author: "Thành viên ẩn danh", description: "tôi muốn cưới cô ấy!" },
        ],
      },
    ],
  };

  handleDetailPost = (post) => {
    console.log("check post >>", post);
    const { ListBlog } = this.state;
    const detailpost = ListBlog.find((detailpost) => post.id == detailpost.id);
    console.log("check ListBlog >>", ListBlog);
    console.log("check detailpost >>", detailpost);
    this.props.history.push(`/post/detail/${post.id}`, detailpost);
  };
  handleDeletelPost = (post) => {
    let currentList = this.state.ListBlog;
    currentList = currentList.filter((item) => item.id !== post.id);
    this.setState({
      ListBlog: currentList,
    });
  };
  addNewPost = (post) => {
    this.setState({
      ListBlog: [...this.state.ListBlog, post],
    });
  };

  handleEditPost = (post) => {
    const { ListBlog } = this.state;
    const editpost = ListBlog.find((editpost) => post.id == editpost.id);
    this.props.history.push(`/post/edit/${post.id}`, editpost);
  };

  render() {
    let { ListBlog } = this.state;
    console.log(">>>>state", this.state);
    return (
      <div className="list-blog-container">
        <div className="list-blog-content">
          {ListBlog &&
            ListBlog.length > 0 &&
            ListBlog.map((item, index) => {
              return (
                <div className="blog-child" key={item.id}>
                  <h2> {item.title} </h2>
                  <p>{item.content}</p>
                  <button
                    className="btn-detail"
                    onClick={() => this.handleDetailPost(item)}
                  >
                    Detail
                  </button>

                  <button
                    className="btn-edit"
                    onClick={() => this.handleEditPost(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDeletelPost(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
        <div className="add-post">
          <AddPost addNewPost={this.addNewPost} />
        </div>
      </div>
    );
  }
}
export default withRouter(ListBlog);
