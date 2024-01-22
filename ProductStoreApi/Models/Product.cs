using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace ProductStoreApi.Models;


public class AverageRating
{
    public int NumberOfReviews { get; set; }
    
    [BsonElement("AverageRating")]
    [JsonPropertyName("AverageRating")]
    public double AverageRatingInternal { get; set; }
}

public class Detail
{
    public int MaxPerOrder { get; set; }
    public DateTime SalesStartDate { get; set; }
    public DateTime SalesEndDate { get; set; }
}

[BsonIgnoreExtraElements]
public class File
{
    public int Id { get; set; }
    public string Src { get; set; } = null!;
    public string FileName { get; set; } = null!;
    public string Extension { get; set; } = null!;
    public string AltDesc { get; set; } = null!;
    
    public string? Title { get; set; }
    public int SortOrder { get; set; }
    public string Type { get; set; } = null!;
}

public class InventoryInternet
{
    public string Status { get; set; } = null!;
}

public class InventoryShops
{
    public int ShopsWithStock { get; set; }
    public string Status { get; set; } = null!;
}

public class Product
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string ArticleNumber { get; set; } = null!;
    public string Brand { get; set; } = null!;
    public AverageRating AverageRating { get; set; } = null!;
    public Detail Detail { get; set; } = null!;
    public bool IsEnabled { get; set; }
    public List<Text> Texts { get; set; } = null!;
    public List<Usp> Usps { get; set; } = null!;
    public List<File> Files { get; set; } = null!;
    public InventoryInternet InventoryInternet { get; set; } = null!;
    public InventoryShops InventoryShops { get; set; } = null!;
}

public class Text
{
    public string Type { get; set; } = null!;
    public string Value { get; set; } = null!;
}

[BsonIgnoreExtraElements]
public class Usp
{
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public int SortOrder { get; set; }
}
