using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class ItemId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItemPictures_Items_ItemNo",
                table: "ItemPictures");

            migrationBuilder.RenameColumn(
                name: "No",
                table: "Items",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ItemNo",
                table: "ItemPictures",
                newName: "ItemId");

            migrationBuilder.RenameIndex(
                name: "IX_ItemPictures_ItemNo",
                table: "ItemPictures",
                newName: "IX_ItemPictures_ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_ItemPictures_Items_ItemId",
                table: "ItemPictures",
                column: "ItemId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItemPictures_Items_ItemId",
                table: "ItemPictures");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Items",
                newName: "No");

            migrationBuilder.RenameColumn(
                name: "ItemId",
                table: "ItemPictures",
                newName: "ItemNo");

            migrationBuilder.RenameIndex(
                name: "IX_ItemPictures_ItemId",
                table: "ItemPictures",
                newName: "IX_ItemPictures_ItemNo");

            migrationBuilder.AddForeignKey(
                name: "FK_ItemPictures_Items_ItemNo",
                table: "ItemPictures",
                column: "ItemNo",
                principalTable: "Items",
                principalColumn: "No",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
