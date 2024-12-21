using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class ItemPicture : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ItemPictures",
                columns: table => new
                {
                    PictureUrl = table.Column<string>(type: "text", nullable: false),
                    ItemNo = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemPictures", x => x.PictureUrl);
                    table.ForeignKey(
                        name: "FK_ItemPictures_Items_ItemNo",
                        column: x => x.ItemNo,
                        principalTable: "Items",
                        principalColumn: "No",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ItemPictures_ItemNo",
                table: "ItemPictures",
                column: "ItemNo");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemPictures");
        }
    }
}
